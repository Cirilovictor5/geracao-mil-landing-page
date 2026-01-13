# 🎓 Landing Page Geração MIL

Landing page completa para matrículas do curso preparatório **Geração MIL**, com sistema de formulário, banco de dados e checkout de pagamento integrados.

## ✅ Funcionalidades Implementadas

### 🎨 Design e Interface
- ✅ Design importado do Figma
- ✅ Inversão completa de cores (azul ↔ amarelo)
- ✅ Tipografia padronizada e alinhada
- ✅ Layout totalmente responsivo
- ✅ Cabeçalho fixo com logo oficial
- ✅ Animações e transições suaves

### 📝 Formulário de Matrícula
- ✅ Campos obrigatórios:
  - Nome Completo
  - Telefone/WhatsApp
  - E-mail
  - Ano que está cursando
  - Como conheceu o Geração MIL
- ✅ Validação de dados
- ✅ Envio para banco de dados Supabase
- ✅ Feedback visual de sucesso/erro

### 💳 Sistema de Pagamento
- ✅ Redirecionamento automático após preenchimento
- ✅ Exibição dos dados do aluno
- ✅ 4 planos de mensalidade:
  - Mensal: R$ 149,90/mês
  - Trimestral: R$ 134,90/mês (10% desconto)
  - Semestral: R$ 119,90/mês (20% desconto)
  - Anual: R$ 104,90/mês (30% desconto)
- ✅ 3 métodos de pagamento:
  - PIX (aprovação imediata)
  - Cartão de Crédito (parcelamento)
  - Boleto (vencimento em 3 dias)
- ✅ Taxa de matrícula: R$ 49,90
- ✅ Primeira mensalidade após 1 mês

### 🗄️ Backend e Banco de Dados
- ✅ Servidor Hono rodando em Supabase Edge Functions
- ✅ Armazenamento em tabela PostgreSQL
- ✅ API RESTful com endpoints:
  - `POST /submit-form` - Enviar formulário
  - `GET /submissions` - Listar todas as submissões
- ✅ Logs detalhados para debugging

### 🎯 Funcionalidades Extras
- ✅ Seção de perguntas frequentes (FAQ) interativa
- ✅ Galeria do Instagram padronizada
- ✅ Links funcionais para redes sociais
- ✅ Informações de garantia e segurança

## 🚀 Como Começar

### 1. ⚠️ CONFIGURAÇÃO OBRIGATÓRIA - Criar Tabela no Banco

**ANTES DE USAR O FORMULÁRIO**, você precisa criar a tabela no Supabase:

1. Acesse o [Dashboard do Supabase](https://supabase.com/dashboard)
2. Selecione o projeto **Figma Make**
3. Clique em **SQL Editor** no menu lateral
4. Clique em **New query**
5. Cole e execute este código:

```sql
CREATE TABLE IF NOT EXISTS kv_store_1421e371 (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);

-- Criar índice para melhor performance
CREATE INDEX IF NOT EXISTS idx_kv_store_key_prefix 
ON kv_store_1421e371 (key text_pattern_ops);
```

6. Clique em **RUN**
7. Pronto! ✅

### 2. Testar o Formulário

1. Abra a aplicação
2. Role até a seção de matrícula
3. Preencha todos os campos
4. Clique em **"GARANTIR MINHA VAGA"**
5. Você será redirecionado para a página de pagamento

### 3. Visualizar Submissões

Para ver todas as matrículas enviadas:

```sql
-- Consulta no SQL Editor do Supabase
SELECT 
  key,
  value->>'nomeCompleto' as nome,
  value->>'email' as email,
  value->>'telefone' as telefone,
  value->>'anoCursando' as ano,
  value->>'comoConheceu' as origem,
  value->>'submittedAt' as data_envio
FROM kv_store_1421e371
WHERE key LIKE 'form_%'
ORDER BY value->>'submittedAt' DESC;
```

Ou use a API:
```
GET https://{projectId}.supabase.co/functions/v1/make-server-1421e371/submissions
```

## 📁 Estrutura de Arquivos

```
/
├── App.tsx                          # Arquivo principal (não usado)
├── imports/
│   └── App-1-1111.tsx              # Landing page principal
├── components/
│   ├── Pagamento.tsx               # Página de checkout
│   ├── DatabaseSetupGuide.tsx      # Guia de configuração do banco
│   └── FormSubmissions.tsx         # Visualizador de submissões
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx           # Servidor backend
│           └── kv_store.tsx        # Interface do banco (protegido)
├── styles/
│   └── globals.css                 # Estilos globais
└── utils/
    └── supabase/
        └── info.tsx                # Configurações do Supabase
```

## 📖 Documentação Adicional

- 📘 **FLUXO_PAGAMENTO.md** - Fluxo completo do processo de matrícula
- 📗 **INSTRUCOES_BANCO_DADOS.md** - Guia detalhado de configuração do banco
- 📙 **README.md** - Este arquivo

## 🔧 Solução de Problemas

### ❌ Erro: "Could not find the table 'public.kv_store_1421e371'"

**Solução:** Você precisa criar a tabela no Supabase. Siga as instruções em [Como Começar](#1-️-configuração-obrigatória---criar-tabela-no-banco).

### ❌ Formulário não está enviando

1. Verifique se todos os campos estão preenchidos
2. Abra o Console do navegador (F12) para ver erros
3. Verifique os logs do servidor no Supabase Dashboard

### ❌ Redirecionamento para pagamento não funciona

1. Certifique-se de que o formulário foi enviado com sucesso
2. Verifique se não há erros no console
3. Tente recarregar a página

## 🚀 Próximos Passos (Produção)

Para colocar em produção, você precisará:

### 1. Integração de Gateway de Pagamento

Escolha um gateway e integre no componente `/components/Pagamento.tsx`:

**Opções recomendadas:**
- [Mercado Pago](https://www.mercadopago.com.br/developers)
- [PagSeguro](https://dev.pagseguro.uol.com.br/)
- [Stripe](https://stripe.com/br)
- [Asaas](https://www.asaas.com/)

**Exemplo de integração:**
```tsx
const handleFinalizarPagamento = async () => {
  // Seu código de integração aqui
  const response = await fetch('/api/create-payment', {
    method: 'POST',
    body: JSON.stringify({
      plano: planoSelecionado,
      metodo: metodoPagamento,
      valor: 49.90
    })
  });
  
  const { paymentUrl } = await response.json();
  window.location.href = paymentUrl;
};
```

### 2. Sistema de E-mails

Configure e-mails automáticos:
- Confirmação de matrícula
- Instruções de acesso ao curso
- Lembretes de pagamento
- Boas-vindas

**Serviços recomendados:**
- SendGrid
- Mailgun
- Amazon SES
- Resend

### 3. Webhooks

Configure webhooks para:
- Receber confirmações de pagamento
- Atualizar status do aluno no banco
- Enviar e-mails automáticos
- Liberar acesso ao curso

### 4. Dashboard Administrativo

Crie um painel para:
- Gerenciar matrículas
- Visualizar relatórios
- Controlar pagamentos
- Acompanhar métricas

## 🎨 Personalização

### Cores

As cores principais estão definidas como:
- **Azul primário:** `#1c398e`
- **Azul secundário:** `#155dfc`
- **Amarelo:** `#fdc700`

Para alterar, busque e substitua no arquivo `/imports/App-1-1111.tsx`.

### Planos e Preços

Para alterar os planos de mensalidade, edite o array `planos` em `/components/Pagamento.tsx`:

```tsx
const planos = [
  {
    id: 'mensal',
    nome: 'Plano Mensal',
    valor: 149.90, // ← Altere aqui
    // ...
  },
  // ...
];
```

### Taxa de Matrícula

Para alterar a taxa de matrícula, busque por `R$ 49,90` e substitua pelo novo valor.

## 📊 Analytics e Monitoramento

Recomendações para acompanhar o desempenho:

1. **Google Analytics** - Tráfego e conversões
2. **Hotjar** - Mapas de calor e gravações
3. **Supabase Logs** - Monitorar submissões
4. **Sentry** - Rastreamento de erros

## 🔐 Segurança

✅ Implementações de segurança:
- Validação de dados no frontend e backend
- Uso de `SUPABASE_SERVICE_ROLE_KEY` apenas no backend
- CORS configurado adequadamente
- Sanitização de inputs
- HTTPS obrigatório (Supabase)

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação neste README
2. Consulte os arquivos de documentação específicos
3. Revise os logs do servidor no Supabase
4. Verifique o console do navegador para erros

---

**✅ Sistema completo e pronto para uso!**

*Desenvolvido com ❤️ para o Geração MIL*
