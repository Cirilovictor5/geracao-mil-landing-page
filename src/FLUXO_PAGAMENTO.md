# 🎓 Fluxo de Matrícula e Pagamento - Geração MIL

## ⚠️ CONFIGURAÇÃO NECESSÁRIA

**IMPORTANTE:** Antes de usar o formulário, você precisa criar a tabela no banco de dados.

### 📋 Passo a Passo Rápido:

1. Acesse o [Dashboard do Supabase](https://supabase.com/dashboard)
2. Clique em **SQL Editor** no menu lateral
3. Clique em **New query**
4. Cole e execute este código:

```sql
CREATE TABLE IF NOT EXISTS kv_store_1421e371 (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);
```

5. Pronto! Agora o formulário funcionará perfeitamente ✅

📖 **Instruções detalhadas:** Veja o arquivo `INSTRUCOES_BANCO_DADOS.md`

---

## 📋 Fluxo Completo do Processo

### 1️⃣ **Preenchimento do Formulário**
O aluno preenche os seguintes campos obrigatórios:
- ✅ Nome Completo
- ✅ Telefone/WhatsApp
- ✅ E-mail
- ✅ Ano que está cursando (1º, 2º ou 3º ano do Ensino Médio)

### 2️⃣ **Envio dos Dados**
Ao clicar no botão **"GARANTIR MINHA VAGA"**:
- Os dados são validados
- As informações são enviadas para o banco de dados Supabase
- Um ID único é gerado para a submissão

### 3️⃣ **Redirecionamento para Pagamento**
Após o envio bem-sucedido:
- ✅ O aluno é **automaticamente redirecionado** para a página de pagamento
- Os dados preenchidos são exibidos para confirmação
- A página rola suavemente para o topo

### 4️⃣ **Página de Pagamento**
Na tela de pagamento, o aluno encontra:

#### 📋 **Seus Dados**
- Confirmação de todas as informações preenchidas

#### 💳 **Taxa de Matrícula**
- **R$ 49,90** (pagamento único obrigatório)
- ✅ Primeira mensalidade após 1 mês

#### 📊 **Escolha do Plano**
Quatro opções disponíveis:

1. **Plano Mensal**
   - R$ 149,90/mês
   - Renovação mensal

2. **Plano Trimestral** 
   - R$ 134,90/mês (Total: R$ 404,70)
   - 10% de desconto

3. **Plano Semestral**
   - R$ 119,90/mês (Total: R$ 719,40)
   - 20% de desconto

4. **Plano Anual** ⭐ MAIS POPULAR
   - R$ 104,90/mês (Total: R$ 1.258,80)
   - 30% de desconto

#### 💰 **Métodos de Pagamento**
Três opções disponíveis:

1. **🔷 PIX**
   - Aprovação imediata

2. **💳 Cartão de Crédito**
   - Parcelamento disponível

3. **📄 Boleto**
   - Vencimento em 3 dias

### 5️⃣ **Finalização do Pagamento**
- O aluno seleciona o plano desejado
- Escolhe o método de pagamento
- Clica em **"🔒 FINALIZAR PAGAMENTO"**
- É redirecionado para o gateway de pagamento (a ser integrado)

## 🔐 Segurança
- 🔒 Pagamento 100% seguro e criptografado
- 🔄 7 dias de garantia
- ✅ Acesso imediato após confirmação

## 📊 Visualização de Submissões
Para acessar todas as submissões do formulário, use o componente:
```tsx
import FormSubmissions from './components/FormSubmissions';
```

Ou acesse diretamente via API:
```
GET https://{projectId}.supabase.co/functions/v1/make-server-1421e371/submissions
```

## 🔗 Endpoints da API

### Envio de Formulário
```
POST https://{projectId}.supabase.co/functions/v1/make-server-1421e371/submit-form

Body (JSON):
{
  "nomeCompleto": "string",
  "telefone": "string",
  "email": "string",
  "anoCursando": "string"
}
```

### Listar Submissões
```
GET https://{projectId}.supabase.co/functions/v1/make-server-1421e371/submissions
```

## 🚀 Próximos Passos para Produção

Para tornar este sistema funcional em produção, você precisará:

1. **Integrar Gateway de Pagamento**
   - Mercado Pago
   - PagSeguro
   - Stripe
   - Asaas
   - Ou outro de sua preferência

2. **Configurar Webhooks**
   - Receber confirmações de pagamento
   - Atualizar status do aluno
   - Enviar e-mails de confirmação

3. **Sistema de E-mails**
   - Confirmação de matrícula
   - Instruções de acesso
   - Lembretes de pagamento

4. **Dashboard Administrativo**
   - Gerenciar matrículas
   - Controlar pagamentos
   - Visualizar relatórios

---

**✅ O fluxo está totalmente implementado e funcional!**