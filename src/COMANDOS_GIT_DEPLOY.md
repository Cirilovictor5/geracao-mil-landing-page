# 💻 COMANDOS GIT E DEPLOY - COPIE E COLE

## 🎯 USE ESTES COMANDOS EXATOS PARA PUBLICAR

---

## 📋 PRÉ-REQUISITOS

### **1. Instalar Git**

#### **Windows:**
```
1. Baixar: https://git-scm.com/download/win
2. Instalar (clique Next em tudo)
3. Abrir Git Bash
```

#### **Mac:**
```bash
# Abrir Terminal e executar:
xcode-select --install
```

#### **Linux:**
```bash
sudo apt-get install git
```

### **2. Verificar se Git está instalado**
```bash
git --version
# Deve mostrar: git version 2.x.x
```

---

## 🚀 COMANDOS PASSO A PASSO

### **PASSO 1: Configurar Git (PRIMEIRA VEZ)**

```bash
# Configurar seu nome (substitua com SEU nome)
git config --global user.name "Seu Nome"

# Configurar seu email (MESMO email do GitHub)
git config --global user.email "seuemail@exemplo.com"

# Verificar configuração
git config --list
```

---

### **PASSO 2: Navegar até a pasta do projeto**

```bash
# Windows (Git Bash ou CMD):
cd C:\Users\SeuUsuario\Desktop\geracao-mil

# Mac/Linux:
cd ~/Desktop/geracao-mil

# Ou arraste a pasta para o terminal
```

**💡 Dica:** Para verificar se está na pasta certa:
```bash
# Listar arquivos
ls
# Ou no Windows CMD:
dir

# Deve mostrar: App.tsx, package.json, etc.
```

---

### **PASSO 3: Inicializar Git no projeto**

```bash
# Inicializar repositório Git
git init

# Verificar status
git status
# Deve mostrar todos os arquivos em vermelho
```

---

### **PASSO 4: Adicionar arquivos ao Git**

```bash
# Adicionar TODOS os arquivos
git add .

# Verificar status novamente
git status
# Agora os arquivos devem estar em verde
```

---

### **PASSO 5: Fazer primeiro commit**

```bash
# Criar commit com mensagem
git commit -m "Primeira versão - Landing Page Geração MIL"

# Confirmar que foi criado
git log --oneline
# Deve mostrar seu commit
```

---

### **PASSO 6: Criar repositório no GitHub**

**⚠️ ANTES DE CONTINUAR:**

1. Acesse: https://github.com/new
2. Repository name: `geracao-mil-landing-page`
3. Marque: **Public**
4. NÃO marque nada mais (sem README, sem .gitignore)
5. Clique: **Create repository**
6. **COPIE** a URL que aparece (parecida com):
   ```
   https://github.com/SEU-USUARIO/geracao-mil-landing-page.git
   ```

---

### **PASSO 7: Conectar ao GitHub**

```bash
# Adicionar repositório remoto (SUBSTITUA SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/geracao-mil-landing-page.git

# Verificar se foi adicionado
git remote -v
# Deve mostrar a URL duas vezes
```

**💡 Exemplo real:**
```bash
# Se seu usuário for "joaosilva":
git remote add origin https://github.com/joaosilva/geracao-mil-landing-page.git
```

---

### **PASSO 8: Enviar código para GitHub**

```bash
# Renomear branch para main
git branch -M main

# Enviar código (PRIMEIRA VEZ)
git push -u origin main

# Vai pedir login do GitHub:
# Username: seu-usuario-github
# Password: ghp_seu_token (não a senha!)
```

**⚠️ IMPORTANTE - Token GitHub:**

Se pedir senha, você precisa criar um Token:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Nome: "Vercel Deploy"
4. Marque: `repo` (todos os checkboxes)
5. Generate token
6. **COPIE** o token (começa com `ghp_`)
7. Use como senha no terminal

---

### **PASSO 9: Verificar se funcionou**

```bash
# Atualizar repositório local
git pull

# Ver status
git status
# Deve dizer "nothing to commit, working tree clean"
```

**✅ Acesse:** `https://github.com/SEU-USUARIO/geracao-mil-landing-page`

Deve ver todos seus arquivos lá! 🎉

---

## 🔄 COMANDOS PARA ATUALIZAR (Depois)

### **Sempre que fizer mudanças:**

```bash
# 1. Adicionar mudanças
git add .

# 2. Criar commit
git commit -m "Descrição da mudança"

# 3. Enviar para GitHub
git push

# Vercel faz deploy automático! ✨
```

**💡 Exemplos de mensagens de commit:**
```bash
git commit -m "Atualizar links da Hotmart"
git commit -m "Adicionar novo depoimento de aluno"
git commit -m "Corrigir cor do botão CTA"
git commit -m "Atualizar imagem hero"
```

---

## 🚀 DEPLOY NA VERCEL

### **PASSO 10: Criar conta Vercel**

**Não precisa de comandos! Fazer no navegador:**

1. Acesse: https://vercel.com/signup
2. Clique: **Continue with GitHub**
3. Autorize a Vercel

---

### **PASSO 11: Importar projeto**

1. Dashboard Vercel → **Add New...** → **Project**
2. Encontre: `geracao-mil-landing-page`
3. Clique: **Import**

---

### **PASSO 12: Configurar build**

**Configure exatamente assim:**

```
Framework Preset: Vite

Build Command: npm run build

Output Directory: dist

Install Command: npm install
```

---

### **PASSO 13: Variáveis de ambiente**

Clique em **Environment Variables** e adicione:

**Nome da variável:** `VITE_SUPABASE_URL`  
**Valor:** Cole a URL do Supabase (ex: `https://abc123.supabase.co`)

**Nome da variável:** `VITE_SUPABASE_ANON_KEY`  
**Valor:** Cole a chave pública do Supabase (ex: `eyJhbG...`)

**💡 Onde pegar esses valores?**

Opção 1: Arquivo `/utils/supabase/info.tsx`
```typescript
export const projectId = 'abc123'; // <- Parte da URL
export const publicAnonKey = 'eyJhbG...'; // <- Anon key
```

Opção 2: Dashboard Supabase
```
Settings → API → Project URL e anon/public key
```

---

### **PASSO 14: Deploy!**

```
🚀 Clique: "Deploy"
⏳ Aguarde: 2-3 minutos
🎉 Pronto!
```

**Sua URL será:**
```
https://geracao-mil-landing-page.vercel.app
```

---

## ✅ VERIFICAR SE FUNCIONOU

### **Checklist Rápido:**

```bash
# 1. Código está no GitHub?
Acesse: https://github.com/SEU-USUARIO/geracao-mil-landing-page
✅ Deve ver seus arquivos

# 2. Deploy concluído na Vercel?
Acesse: https://vercel.com/dashboard
✅ Deve mostrar "Ready"

# 3. Landing page no ar?
Acesse: https://geracao-mil-landing-page.vercel.app
✅ Deve abrir sua landing page

# 4. HTTPS ativo?
✅ Deve ter cadeado verde na URL
```

---

## 🚨 RESOLVER PROBLEMAS

### **Problema: "git: command not found"**
```bash
Solução: Git não está instalado
1. Baixar em https://git-scm.com
2. Instalar
3. Reiniciar terminal
4. Testar: git --version
```

### **Problema: "Permission denied (publickey)"**
```bash
Solução: Usar HTTPS ao invés de SSH
git remote set-url origin https://github.com/SEU-USUARIO/geracao-mil-landing-page.git
```

### **Problema: "fatal: not a git repository"**
```bash
Solução: Não está na pasta do projeto
# Navegar para pasta correta
cd /caminho/para/seu/projeto
# Verificar se tem App.tsx
ls App.tsx
```

### **Problema: Deploy falhou na Vercel**
```bash
Solução: Verificar configurações
Build Command: npm run build
Output Directory: dist

# Ver logs de erro na Vercel
Deployments → Clicar no deploy falhado → Ver logs
```

### **Problema: Landing page mostra erro 404**
```bash
Solução: Aguardar propagação
1. Esperar 2-3 minutos após deploy
2. Limpar cache: Ctrl + F5
3. Testar em aba anônima
```

---

## 📋 RESUMO DOS COMANDOS

### **PRIMEIRA VEZ (Setup Inicial):**
```bash
# 1. Configurar Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Ir para pasta do projeto
cd /caminho/para/projeto

# 3. Inicializar Git
git init

# 4. Adicionar arquivos
git add .

# 5. Primeiro commit
git commit -m "Landing Page Geração MIL"

# 6. Conectar ao GitHub (SUBSTITUA URL)
git remote add origin https://github.com/SEU-USUARIO/geracao-mil-landing-page.git

# 7. Enviar código
git branch -M main
git push -u origin main
```

### **TODA VEZ QUE ATUALIZAR:**
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

**✨ Vercel faz deploy automático!**

---

## 🎯 COMANDOS ÚTEIS

### **Ver status atual:**
```bash
git status
```

### **Ver histórico de commits:**
```bash
git log --oneline
```

### **Desfazer mudanças não commitadas:**
```bash
git checkout .
```

### **Atualizar do GitHub:**
```bash
git pull
```

### **Ver diferenças:**
```bash
git diff
```

### **Ver repositórios remotos:**
```bash
git remote -v
```

---

## 💡 DICAS PRO

### **1. Criar .gitignore**
```bash
# Criar arquivo .gitignore
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "dist/" >> .gitignore

# Adicionar ao Git
git add .gitignore
git commit -m "Adicionar .gitignore"
git push
```

### **2. Commit messages profissionais**
```bash
# Formato recomendado:
git commit -m "tipo: descrição curta"

# Exemplos:
git commit -m "feat: adicionar novo depoimento"
git commit -m "fix: corrigir link Hotmart"
git commit -m "style: atualizar cor do botão"
git commit -m "docs: atualizar README"
```

### **3. Ver mudanças antes de commit**
```bash
git diff
# Aperte Q para sair
```

---

## 🎉 PRONTO!

### **Você agora sabe:**
✅ Usar Git  
✅ Enviar código para GitHub  
✅ Fazer deploy na Vercel  
✅ Atualizar a landing page  

### **Sua landing page:**
✅ Está no GitHub  
✅ Está na Vercel  
✅ Está online 24/7  
✅ Atualiza automaticamente  

---

## 📞 COMANDOS PARA COPIAR E COLAR

### **Setup Completo (substituindo SEU-USUARIO e SEU-EMAIL):**

```bash
git config --global user.name "Seu Nome Aqui"
git config --global user.email "seuemail@exemplo.com"
cd /caminho/para/projeto
git init
git add .
git commit -m "Landing Page Geração MIL - Primeira versão"
git remote add origin https://github.com/SEU-USUARIO/geracao-mil-landing-page.git
git branch -M main
git push -u origin main
```

**Cole tudo de uma vez no terminal!** (depois de substituir as informações)

---

**Boa sorte! Sua landing page estará no ar em instantes! 🚀💯**

---

**Criado:** 13/01/2026  
**Atualizado:** 13/01/2026  
**Dificuldade:** Iniciante  
**Tempo:** 15-30 minutos
