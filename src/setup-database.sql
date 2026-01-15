-- ================================================================
-- CONFIGURAÇÃO DO BANCO DE DADOS - GERAÇÃO MIL
-- ================================================================
-- 
-- INSTRUÇÕES:
-- 1. Acesse: https://supabase.com/dashboard
-- 2. Selecione seu projeto
-- 3. Clique em "SQL Editor" no menu lateral
-- 4. Clique em "New query"
-- 5. Cole todo este código
-- 6. Clique em "RUN" (ou pressione Ctrl+Enter)
-- 7. Pronto! ✅
--
-- ================================================================

-- Criar a tabela principal de armazenamento
CREATE TABLE IF NOT EXISTS kv_store_1421e371 (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);

-- Adicionar comentário para documentação
COMMENT ON TABLE kv_store_1421e371 IS 'Tabela de armazenamento chave-valor para dados do formulário de matrícula do Geração MIL';

-- Criar índice para melhorar performance de buscas por prefixo
-- Isso acelera consultas que buscam por chaves que começam com 'form_'
CREATE INDEX IF NOT EXISTS idx_kv_store_key_prefix 
ON kv_store_1421e371 (key text_pattern_ops);

-- Criar índice GIN para consultas no JSON
-- Isso acelera consultas que filtram pelos campos dentro do value
CREATE INDEX IF NOT EXISTS idx_kv_store_value_gin 
ON kv_store_1421e371 USING GIN (value);

-- ================================================================
-- VERIFICAÇÃO
-- ================================================================

-- Verificar se a tabela foi criada com sucesso
SELECT 
  'Tabela criada com sucesso!' as status,
  COUNT(*) as total_registros,
  CASE 
    WHEN COUNT(*) = 0 THEN 'Nenhum registro ainda (aguardando submissões)'
    ELSE CONCAT(COUNT(*), ' registro(s) encontrado(s)')
  END as informacao
FROM kv_store_1421e371;

-- ================================================================
-- CONSULTAS ÚTEIS (OPCIONAL)
-- ================================================================

-- Após algumas submissões, você pode usar estas consultas:

-- 1. Ver todas as submissões do formulário
-- SELECT 
--   key as id_submissao,
--   value->>'nomeCompleto' as nome,
--   value->>'email' as email,
--   value->>'telefone' as telefone,
--   value->>'anoCursando' as ano,
--   value->>'comoConheceu' as origem,
--   value->>'submittedAt' as data_envio
-- FROM kv_store_1421e371
-- WHERE key LIKE 'form_%'
-- ORDER BY value->>'submittedAt' DESC;

-- 2. Contar total de matrículas
-- SELECT COUNT(*) as total_matriculas
-- FROM kv_store_1421e371
-- WHERE key LIKE 'form_%';

-- 3. Ver distribuição por ano escolar
-- SELECT 
--   value->>'anoCursando' as ano_escolar,
--   COUNT(*) as total
-- FROM kv_store_1421e371
-- WHERE key LIKE 'form_%'
-- GROUP BY value->>'anoCursando'
-- ORDER BY total DESC;

-- 4. Ver origem dos alunos (como conheceram)
-- SELECT 
--   value->>'comoConheceu' as origem,
--   COUNT(*) as total
-- FROM kv_store_1421e371
-- WHERE key LIKE 'form_%'
-- GROUP BY value->>'comoConheceu'
-- ORDER BY total DESC;

-- 5. Matrículas dos últimos 7 dias
-- SELECT 
--   value->>'nomeCompleto' as nome,
--   value->>'email' as email,
--   value->>'submittedAt' as data
-- FROM kv_store_1421e371
-- WHERE 
--   key LIKE 'form_%'
--   AND (value->>'submittedAt')::timestamp > NOW() - INTERVAL '7 days'
-- ORDER BY value->>'submittedAt' DESC;

-- ================================================================
-- BACKUP E EXPORTAÇÃO (OPCIONAL)
-- ================================================================

-- Para fazer backup de todos os dados:
-- COPY (
--   SELECT key, value 
--   FROM kv_store_1421e371
--   WHERE key LIKE 'form_%'
-- ) TO '/tmp/backup_matriculas.csv' WITH CSV HEADER;

-- ================================================================
-- LIMPEZA (USE COM CUIDADO!)
-- ================================================================

-- ATENÇÃO: Isso vai DELETAR TODOS OS DADOS!
-- Apenas descomente e execute se tiver certeza absoluta
-- DELETE FROM kv_store_1421e371 WHERE key LIKE 'form_%';

-- Para deletar a tabela completamente (não recomendado):
-- DROP TABLE IF EXISTS kv_store_1421e371;

-- ================================================================
-- FIM DO SCRIPT
-- ================================================================

SELECT '✅ Configuração concluída com sucesso!' as resultado;
