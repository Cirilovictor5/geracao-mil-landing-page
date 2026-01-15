export default function DatabaseSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c398e] to-[#155dfc] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-[64px] mb-4">🗄️</div>
          <h1 className="text-[36px] text-[#1c398e] mb-2">Configuração Necessária</h1>
          <p className="text-[18px] text-gray-600">
            Precisamos criar a tabela no banco de dados antes de usar o formulário
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-[#fdc700]/10 border-2 border-[#fdc700] rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-[24px]">⚠️</div>
            <div>
              <h2 className="text-[20px] text-[#1c398e] mb-2">A tabela kv_store_1421e371 não foi encontrada</h2>
              <p className="text-[14px] text-gray-700">
                Não se preocupe! É só seguir os passos abaixo para configurar o banco de dados. 
                Leva menos de 2 minutos! ⏱️
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-[#fdc700] text-[#1c398e] rounded-full flex items-center justify-center text-[18px]">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] text-[#1c398e] mb-2">Acesse o Supabase</h3>
              <p className="text-[14px] text-gray-600 mb-2">
                Abra o <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-[#155dfc] underline hover:text-[#fdc700]">Dashboard do Supabase</a> e faça login
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-[#fdc700] text-[#1c398e] rounded-full flex items-center justify-center text-[18px]">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] text-[#1c398e] mb-2">Abra o SQL Editor</h3>
              <p className="text-[14px] text-gray-600">
                No menu lateral esquerdo, clique em <strong>"SQL Editor"</strong> e depois em <strong>"New query"</strong>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-[#fdc700] text-[#1c398e] rounded-full flex items-center justify-center text-[18px]">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] text-[#1c398e] mb-2">Cole e Execute o Código</h3>
              <p className="text-[14px] text-gray-600 mb-3">
                Copie o código abaixo e clique em <strong>"RUN"</strong>:
              </p>
              <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-[12px] overflow-x-auto">
                <pre>{`CREATE TABLE IF NOT EXISTS kv_store_1421e371 (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);

-- Criar índice para melhor performance
CREATE INDEX IF NOT EXISTS idx_kv_store_key_prefix 
ON kv_store_1421e371 (key text_pattern_ops);`}</pre>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`CREATE TABLE IF NOT EXISTS kv_store_1421e371 (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_kv_store_key_prefix 
ON kv_store_1421e371 (key text_pattern_ops);`);
                  alert('✅ Código copiado! Cole no SQL Editor do Supabase.');
                }}
                className="mt-3 bg-[#1c398e] text-white px-4 py-2 rounded-lg hover:bg-[#fdc700] hover:text-[#1c398e] transition-all text-[14px]"
              >
                📋 Copiar Código
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-[#fdc700] text-[#1c398e] rounded-full flex items-center justify-center text-[18px]">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] text-[#1c398e] mb-2">Recarregue a Página</h3>
              <p className="text-[14px] text-gray-600 mb-3">
                Após executar o código no Supabase, volte aqui e recarregue a página
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#fdc700] text-[#1c398e] px-6 py-3 rounded-lg hover:bg-[#e6b600] transition-all text-[16px] shadow-lg"
              >
                🔄 Recarregar Página
              </button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="text-[24px]">💡</div>
            <div>
              <h3 className="text-[16px] text-[#1c398e] mb-2">Precisa de Ajuda?</h3>
              <p className="text-[14px] text-gray-700 mb-2">
                Veja instruções detalhadas no arquivo <code className="bg-gray-200 px-2 py-1 rounded text-[12px]">INSTRUCOES_BANCO_DADOS.md</code>
              </p>
              <p className="text-[12px] text-gray-500">
                ℹ️ Esta tabela armazena todas as submissões do formulário de matrícula de forma segura
              </p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 text-center">
          <p className="text-[14px] text-gray-500">
            ✅ Após criar a tabela, o formulário e o sistema de pagamento funcionarão perfeitamente!
          </p>
        </div>
      </div>
    </div>
  );
}
