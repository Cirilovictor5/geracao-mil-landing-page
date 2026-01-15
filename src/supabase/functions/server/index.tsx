import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Create Supabase client
const getSupabaseClient = () => {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
};

// Health check endpoint
app.get("/make-server-1421e371/health", (c) => {
  return c.json({ status: "ok" });
});

// Form submission endpoint
app.post("/make-server-1421e371/submit-form", async (c) => {
  try {
    const formData = await c.req.json();
    
    // Validate required fields
    if (!formData.nomeCompleto || !formData.telefone || !formData.email || !formData.anoCursando) {
      return c.json({ 
        success: false, 
        error: "Todos os campos obrigatórios devem ser preenchidos" 
      }, 400);
    }

    const supabase = getSupabaseClient();
    
    // Generate unique ID for this submission
    const submissionId = `form_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Try to store in database
    try {
      const { error: upsertError } = await supabase
        .from("kv_store_1421e371")
        .upsert({
          key: submissionId,
          value: {
            ...formData,
            submittedAt: new Date().toISOString()
          }
        });

      if (upsertError) {
        // If table doesn't exist, log the submission to console
        console.error("Database error (table may not exist):", upsertError.message);
        console.log("FORM SUBMISSION (stored in logs):", {
          id: submissionId,
          data: formData,
          submittedAt: new Date().toISOString()
        });
        
        return c.json({ 
          success: true, 
          message: "Formulário recebido! (Aguardando configuração do banco de dados)",
          submissionId,
          warning: "Os dados foram registrados nos logs. Configure a tabela kv_store_1421e371 no Supabase."
        });
      }
    } catch (dbError) {
      console.error("Error accessing database:", dbError);
      console.log("FORM SUBMISSION (stored in logs):", {
        id: submissionId,
        data: formData,
        submittedAt: new Date().toISOString()
      });
      
      return c.json({ 
        success: true, 
        message: "Formulário recebido! (Aguardando configuração do banco de dados)",
        submissionId,
        warning: "Os dados foram registrados nos logs."
      });
    }

    console.log(`Form submission saved to database: ${submissionId}`, formData);

    return c.json({ 
      success: true, 
      message: "Formulário enviado com sucesso!",
      submissionId 
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao processar formulário: ${error.message}` 
    }, 500);
  }
});

// Get all form submissions endpoint
app.get("/make-server-1421e371/submissions", async (c) => {
  try {
    const supabase = getSupabaseClient();
    
    try {
      const { data, error } = await supabase
        .from("kv_store_1421e371")
        .select("key, value")
        .like("key", "form_%");

      if (error) {
        console.error("Database error:", error.message);
        return c.json({ 
          success: false, 
          error: "Tabela kv_store_1421e371 não encontrada. Por favor, crie a tabela no Supabase.",
          instructions: "Execute no SQL Editor do Supabase:\n\nCREATE TABLE IF NOT EXISTS kv_store_1421e371 (\n  key TEXT NOT NULL PRIMARY KEY,\n  value JSONB NOT NULL\n);"
        }, 500);
      }

      const submissions = data?.map((d) => d.value) ?? [];
      
      return c.json({ 
        success: true, 
        count: submissions.length,
        submissions 
      });
    } catch (dbError) {
      console.error("Error accessing database:", dbError);
      return c.json({ 
        success: false, 
        error: "Erro ao acessar o banco de dados. Verifique se a tabela kv_store_1421e371 existe."
      }, 500);
    }
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao buscar submissões: ${error.message}` 
    }, 500);
  }
});

// Server is ready - All endpoints configured
Deno.serve(app.fetch);
