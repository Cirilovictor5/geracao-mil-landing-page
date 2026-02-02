# 🔗 LINKS HOTMART - GUIA RÁPIDO

## 📍 ONDE ESTÃO OS LINKS

### **Plano Básico**
- **Arquivo:** `/imports/App-1-1111.tsx`
- **Linha:** 2604
- **Link atual:** `https://pay.hotmart.com/T103705923C`

### **Plano Completo**
- **Arquivo:** `/imports/App-1-1111.tsx`
- **Linha:** 2664
- **Link atual:** `https://pay.hotmart.com/T103705923C`

---

## ✏️ COMO ALTERAR OS LINKS

### **Método 1: Usar o Editor do Figma Make**

1. Abra o arquivo `/imports/App-1-1111.tsx`
2. Procure por `https://pay.hotmart.com/`
3. Substitua o link pelo novo link da Hotmart
4. Salve o arquivo

### **Método 2: Buscar e Substituir**

**Para o Plano Básico:**
```typescript
// Procure por (linha ~2604):
href="https://pay.hotmart.com/T103705923C"

// Substitua por:
href="SEU_NOVO_LINK_HOTMART_AQUI"
```

**Para o Plano Completo:**
```typescript
// Procure por (linha ~2664):
href="https://pay.hotmart.com/T103705923C"

// Substitua por:
href="SEU_NOVO_LINK_HOTMART_AQUI"
```

---

## 🎯 EXEMPLO DE LINKS DIFERENTES

Se você criar 2 produtos na Hotmart:

```typescript
// Plano Básico (R$ 89,90/mês)
href="https://pay.hotmart.com/ABC123DEF"

// Plano Completo (R$ 129,90/mês)
href="https://pay.hotmart.com/XYZ789GHI"
```

---

## 📊 ADICIONAR RASTREAMENTO (OPCIONAL)

Para saber qual plano está gerando mais vendas:

```typescript
// Plano Básico
href="https://pay.hotmart.com/T103705923C?src=plano_basico"

// Plano Completo
href="https://pay.hotmart.com/T103705923C?src=plano_completo"
```

Depois analise no painel da Hotmart qual link teve mais conversões! 📈

---

## ⚡ RESUMO ULTRA-RÁPIDO

**Onde alterar?** → `/imports/App-1-1111.tsx`  
**Linhas:** 2604 (Básico) e 2664 (Completo)  
**O que substituir?** → `href="https://pay.hotmart.com/T103705923C"`  
**Por quê?** → Pelo novo link da Hotmart  

✅ **É SUPER SIMPLES!**
