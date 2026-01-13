# 🗄️ Instruções para Configuração do Banco de Dados

## ⚠️ ERRO ATUAL
O erro que você está vendo acontece porque a tabela `kv_store_1421e371` ainda não foi criada no banco de dados Supabase.

## ✅ SOLUÇÃO: Criar a Tabela Manualmente

### Passo 1: Acessar o Painel do Supabase
1. Abra o [Dashboard do Supabase](https://supabase.com/dashboard)
2. Faça login na sua conta
3. Selecione o projeto **Figma Make**

### Passo 2: Acessar o SQL Editor
1. No menu lateral esquerdo, clique em **"SQL Editor"**
2. Clique em **"New query"** (Nova consulta)

### Passo 3: Executar o Script de Criação
Cole o seguinte código SQL e clique em **"RUN"** (Executar):

```sql
-- Criar a tabela kv_store_1421e371
CREATE TABLE IF NOT EXISTS kv_store_1421e371 (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);

-- Adicionar comentário para documentação
COMMENT ON TABLE kv_store_1421e371 IS 'Tabela de armazenamento chave-valor para dados do Geração MIL';

-- Criar índice para melhorar performance de buscas por prefixo
CREATE INDEX IF NOT EXISTS idx_kv_store_key_prefix 
ON kv_store_1421e371 (key text_pattern_ops);

-- Verificar se a tabela foi criada com sucesso
SELECT 
  'Tabela criada com sucesso!' as status,
  COUNT(*) as total_registros
FROM kv_store_1421e371;
```

### Passo 4: Verificar a Criação
Após executar o script, você deve ver a mensagem:
```
Tabela criada com sucesso!
total_registros: 0
```

### Passo 5: Testar o Formulário
1. Volte para a aplicação
2. Tente preencher e enviar o formulário novamente
3. Agora deve funcionar sem erros! ✅

## 📊 Visualizar a Tabela

Para ver a tabela criada:
1. No menu lateral, clique em **"Table Editor"**
2. Você verá a tabela `kv_store_1421e371` na lista
3. Clique nela para visualizar os dados submetidos

## 🔍 Consultar Submissões do Formulário

Para ver todas as submissões de formulário:

```sql
-- Ver todas as submissões
SELECT 
  key,
  value->>'nomeCompleto' as nome,
  value->>'email' as email,
  value->>'telefone' as telefone,
  value->>'anoCursando' as ano,
  value->>'comoConheceu' as como_conheceu,
  value->>'submittedAt' as data_envio
FROM kv_store_1421e371
WHERE key LIKE 'form_%'
ORDER BY value->>'submittedAt' DESC;
```

## 🔧 Solução de Problemas

### Erro de Permissão
Se você receber um erro de permissão:
1. Certifique-se de estar logado como administrador do projeto
2. Verifique se está no projeto correto

### Tabela Já Existe
Se a tabela já existir, o script não fará nada (devido ao `IF NOT EXISTS`)

### Dados Não Aparecem
1. Verifique os logs do servidor em **Supabase > Edge Functions > Logs**
2. Certifique-se de que o formulário está sendo submetido corretamente
3. Execute a query de consulta acima para verificar os dados

## 📝 Estrutura da Tabela

| Coluna | Tipo   | Descrição                           |
|--------|--------|-------------------------------------|
| key    | TEXT   | Identificador único (chave primária)|
| value  | JSONB  | Dados do formulário em JSON         |

### Exemplo de Dados Armazenados

```json
{
  "nomeCompleto": "João Silva",
  "telefone": "(11) 98765-4321",
  "email": "joao@example.com",
  "anoCursando": "2º ano",
  "comoConheceu": "Instagram",
  "submittedAt": "2024-01-15T10:30:00.000Z"
}
```

## 🚀 Após a Configuração

Depois de criar a tabela, o sistema estará totalmente funcional:
- ✅ Formulários serão salvos no banco de dados
- ✅ Você poderá consultar todas as submissões
- ✅ O redirecionamento para pagamento funcionará
- ✅ Os dados estarão seguros e persistentes

## 💡 Dica
Você pode criar um dashboard personalizado no Supabase para visualizar:
- Total de matrículas
- Origem dos alunos (como conheceram)
- Distribuição por ano escolar
- Tendências de inscrição ao longo do tempo
