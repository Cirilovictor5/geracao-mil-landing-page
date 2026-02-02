#!/bin/bash

# ========================================
# 🚀 SCRIPT DE DEPLOY AUTOMÁTICO
# Landing Page Geração MIL
# ========================================

echo "🎯 SCRIPT DE DEPLOY - GERAÇÃO MIL"
echo "=================================="
echo ""

# ========================================
# CONFIGURAÇÃO INICIAL
# ⚠️ EDITE ESTAS VARIÁVEIS ANTES DE EXECUTAR!
# ========================================

# Seu nome completo
SEU_NOME="Seu Nome Aqui"

# Seu email (MESMO do GitHub)
SEU_EMAIL="seuemail@exemplo.com"

# URL do seu repositório GitHub (você vai pegar depois de criar o repositório)
# Exemplo: https://github.com/seunome/geracao-mil-landing-page.git
REPO_URL=""

# ========================================
# VERIFICAÇÃO
# ========================================

echo "📋 Verificando informações..."
echo ""

if [ "$SEU_NOME" = "Seu Nome Aqui" ]; then
    echo "❌ ERRO: Você precisa editar a variável SEU_NOME"
    echo "   Abra este arquivo e substitua 'Seu Nome Aqui' pelo seu nome real"
    exit 1
fi

if [ "$SEU_EMAIL" = "seuemail@exemplo.com" ]; then
    echo "❌ ERRO: Você precisa editar a variável SEU_EMAIL"
    echo "   Abra este arquivo e substitua 'seuemail@exemplo.com' pelo seu email"
    exit 1
fi

if [ -z "$REPO_URL" ]; then
    echo "⚠️  AVISO: REPO_URL ainda não foi definida"
    echo ""
    echo "📝 INSTRUÇÕES:"
    echo "1. Primeiro crie o repositório no GitHub:"
    echo "   - Acesse: https://github.com/new"
    echo "   - Nome: geracao-mil-landing-page"
    echo "   - Marque: Public"
    echo "   - Clique: Create repository"
    echo ""
    echo "2. Copie a URL que aparece (algo como):"
    echo "   https://github.com/SEU-USUARIO/geracao-mil-landing-page.git"
    echo ""
    echo "3. Volte a este arquivo e cole na variável REPO_URL"
    echo ""
    echo "4. Execute este script novamente"
    echo ""
    exit 1
fi

echo "✅ Informações configuradas:"
echo "   Nome: $SEU_NOME"
echo "   Email: $SEU_EMAIL"
echo "   Repositório: $REPO_URL"
echo ""

# ========================================
# VERIFICAR GIT
# ========================================

echo "🔍 Verificando Git..."

if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado!"
    echo ""
    echo "📥 Baixe e instale o Git:"
    echo "   Windows: https://git-scm.com/download/win"
    echo "   Mac: xcode-select --install"
    echo "   Linux: sudo apt-get install git"
    echo ""
    exit 1
fi

echo "✅ Git instalado: $(git --version)"
echo ""

# ========================================
# CONFIGURAR GIT
# ========================================

echo "⚙️  Configurando Git..."

git config --global user.name "$SEU_NOME"
git config --global user.email "$SEU_EMAIL"

echo "✅ Git configurado"
echo ""

# ========================================
# VERIFICAR PASTA DO PROJETO
# ========================================

echo "📁 Verificando projeto..."

if [ ! -f "App.tsx" ]; then
    echo "❌ ERRO: App.tsx não encontrado!"
    echo ""
    echo "⚠️  Você está na pasta correta?"
    echo "   Este script deve ser executado na pasta do projeto"
    echo "   onde está o arquivo App.tsx"
    echo ""
    echo "💡 Dica:"
    echo "   1. Abra o terminal"
    echo "   2. Navegue até a pasta do projeto: cd /caminho/para/projeto"
    echo "   3. Execute este script novamente"
    echo ""
    exit 1
fi

if [ ! -f "package.json" ]; then
    echo "❌ ERRO: package.json não encontrado!"
    echo "   Verifique se está na pasta correta do projeto"
    exit 1
fi

echo "✅ Projeto encontrado"
echo ""

# ========================================
# INICIALIZAR GIT
# ========================================

echo "🚀 Inicializando repositório Git..."

if [ -d ".git" ]; then
    echo "⚠️  Repositório Git já existe. Pulando inicialização."
else
    git init
    echo "✅ Repositório Git inicializado"
fi

echo ""

# ========================================
# ADICIONAR ARQUIVOS
# ========================================

echo "📦 Adicionando arquivos ao Git..."

git add .

echo "✅ Arquivos adicionados"
echo ""

# ========================================
# CRIAR COMMIT
# ========================================

echo "💾 Criando commit..."

git commit -m "Landing Page Geração MIL - Versão Inicial"

if [ $? -eq 0 ]; then
    echo "✅ Commit criado com sucesso"
else
    echo "⚠️  Commit já existe ou sem mudanças"
fi

echo ""

# ========================================
# CONECTAR AO GITHUB
# ========================================

echo "🔗 Conectando ao GitHub..."

# Verificar se remote já existe
if git remote | grep -q "^origin$"; then
    echo "⚠️  Remote 'origin' já existe. Removendo..."
    git remote remove origin
fi

git remote add origin "$REPO_URL"

if [ $? -eq 0 ]; then
    echo "✅ Conectado ao repositório GitHub"
else
    echo "❌ Erro ao conectar ao GitHub"
    echo "   Verifique se a URL está correta: $REPO_URL"
    exit 1
fi

echo ""

# ========================================
# RENOMEAR BRANCH
# ========================================

echo "🌿 Configurando branch principal..."

git branch -M main

echo "✅ Branch renomeada para 'main'"
echo ""

# ========================================
# ENVIAR PARA GITHUB
# ========================================

echo "🚀 Enviando código para o GitHub..."
echo ""
echo "⚠️  ATENÇÃO:"
echo "   O GitHub vai pedir suas credenciais."
echo "   Digite seu usuário e senha (ou token)."
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ✅ ✅ CÓDIGO ENVIADO COM SUCESSO! ✅ ✅ ✅"
    echo ""
    echo "🎉 Parabéns! Seu código está no GitHub!"
    echo ""
    echo "🌐 Acesse em:"
    echo "   $REPO_URL"
    echo ""
    echo "📌 PRÓXIMOS PASSOS:"
    echo "   1. Verifique se os arquivos aparecem no GitHub"
    echo "   2. Acesse: https://vercel.com/signup"
    echo "   3. Faça login com GitHub"
    echo "   4. Importe o projeto geracao-mil-landing-page"
    echo "   5. Configure as variáveis de ambiente"
    echo "   6. Clique em Deploy"
    echo ""
    echo "📚 Guia completo em: /TUTORIAL_VISUAL_GITHUB.md"
    echo ""
else
    echo ""
    echo "❌ Erro ao enviar para o GitHub"
    echo ""
    echo "🔍 Possíveis problemas:"
    echo "   1. Credenciais incorretas"
    echo "   2. Repositório não existe"
    echo "   3. Sem permissão para fazer push"
    echo ""
    echo "💡 Soluções:"
    echo "   - Verifique usuário e senha"
    echo "   - Crie um token em: https://github.com/settings/tokens"
    echo "   - Use o token como senha"
    echo ""
    exit 1
fi

# ========================================
# FIM
# ========================================

echo "✨ Script concluído!"
echo ""
echo "═══════════════════════════════════════════"
echo "  🎊 CÓDIGO NO GITHUB! PRÓXIMO: VERCEL! 🎊  "
echo "═══════════════════════════════════════════"
