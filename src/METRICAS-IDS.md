# 📊 IDs de Métricas - Geração MIL Landing Page

## 📌 Documentação Completa de Tracking IDs

Este documento contém todos os IDs e data-attributes implementados na landing page para rastreamento de métricas, conversões e comportamento do usuário.

---

## 🎯 BOTÕES DE CONVERSÃO (PLANOS)

### 1️⃣ **PLANOS REGULARES**

#### **Plano Básico Regular**
```html
<a 
  id="btn-plano-basico-regular"
  data-track="click-plano"
  data-plan="basico"
  data-price="89.90"
  data-section="planos-regulares"
  data-promotion="false"
  href="https://pay.hotmart.com/T103705923C"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-plano-basico-regular` | ID único do botão |
| `data-track` | `click-plano` | Tipo de evento |
| `data-plan` | `basico` | Tipo de plano |
| `data-price` | `89.90` | Valor mensal |
| `data-section` | `planos-regulares` | Seção da página |
| `data-promotion` | `false` | Não é promocional |

---

#### **Plano Completo Regular (MAIS POPULAR)**
```html
<a 
  id="btn-plano-completo-regular"
  data-track="click-plano"
  data-plan="completo"
  data-price="129.90"
  data-section="planos-regulares"
  data-promotion="false"
  data-badge="mais-popular"
  href="https://pay.hotmart.com/L103735493W"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-plano-completo-regular` | ID único do botão |
| `data-track` | `click-plano` | Tipo de evento |
| `data-plan` | `completo` | Tipo de plano |
| `data-price` | `129.90` | Valor mensal |
| `data-section` | `planos-regulares` | Seção da página |
| `data-promotion` | `false` | Não é promocional |
| `data-badge` | `mais-popular` | Badge especial |

---

### 2️⃣ **PROMOÇÃO RELÂMPAGO (48H)**

#### **Plano Básico Promocional**
```html
<a 
  id="btn-plano-basico-promo"
  data-track="click-plano"
  data-plan="basico"
  data-price="59.90"
  data-original-price="89.90"
  data-discount="30.00"
  data-section="promocao-relampago"
  data-promotion="true"
  data-deadline="2026-01-16T23:59:59"
  href="https://pay.hotmart.com/D103797634A"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-plano-basico-promo` | ID único do botão |
| `data-track` | `click-plano` | Tipo de evento |
| `data-plan` | `basico` | Tipo de plano |
| `data-price` | `59.90` | Valor promocional |
| `data-original-price` | `89.90` | Valor original |
| `data-discount` | `30.00` | Desconto em R$ |
| `data-section` | `promocao-relampago` | Seção da página |
| `data-promotion` | `true` | É promocional |
| `data-deadline` | `2026-01-16T23:59:59` | Prazo final |

---

#### **Plano Completo Promocional (MELHOR OFERTA)**
```html
<a 
  id="btn-plano-completo-promo"
  data-track="click-plano"
  data-plan="completo"
  data-price="99.90"
  data-original-price="129.90"
  data-discount="30.00"
  data-section="promocao-relampago"
  data-promotion="true"
  data-badge="melhor-oferta"
  data-deadline="2026-01-16T23:59:59"
  href="https://pay.hotmart.com/M103797378J"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-plano-completo-promo` | ID único do botão |
| `data-track` | `click-plano` | Tipo de evento |
| `data-plan` | `completo` | Tipo de plano |
| `data-price` | `99.90` | Valor promocional |
| `data-original-price` | `129.90` | Valor original |
| `data-discount` | `30.00` | Desconto em R$ |
| `data-section` | `promocao-relampago` | Seção da página |
| `data-promotion` | `true` | É promocional |
| `data-badge` | `melhor-oferta` | Badge especial |
| `data-deadline` | `2026-01-16T23:59:59` | Prazo final |

---

## 📝 FORMULÁRIO DE INSCRIÇÃO

#### **Botão Principal do Formulário**
```html
<a 
  id="btn-inscricao-formulario"
  data-track="click-navigation"
  data-section="formulario-inscricao"
  data-action="garantir-vaga"
  data-destination="planos"
  href="#planos"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-inscricao-formulario` | ID único do botão |
| `data-track` | `click-navigation` | Tipo de evento |
| `data-section` | `formulario-inscricao` | Seção da página |
| `data-action` | `garantir-vaga` | Ação do usuário |
| `data-destination` | `planos` | Destino da navegação |

---

## 📱 REDES SOCIAIS

### **Instagram Oficial**
```html
<a 
  id="social-instagram-oficial"
  data-track="click-social"
  data-social="instagram"
  data-account="geracaomil"
  data-section="contato"
  href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `social-instagram-oficial` | ID único do link |
| `data-track` | `click-social` | Tipo de evento |
| `data-social` | `instagram` | Rede social |
| `data-account` | `geracaomil` | Conta |
| `data-section` | `contato` | Seção da página |

---

### **Instagram Podcast**
```html
<a 
  id="social-instagram-podcast"
  data-track="click-social"
  data-social="instagram"
  data-account="podcastgeracaomil"
  data-section="contato"
  href="https://www.instagram.com/podcastgeracaomil?igsh=eHNuYzhvZ3BuNDM1"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `social-instagram-podcast` | ID único do link |
| `data-track` | `click-social` | Tipo de evento |
| `data-social` | `instagram` | Rede social |
| `data-account` | `podcastgeracaomil` | Conta do podcast |
| `data-section` | `contato` | Seção da página |

---

### **YouTube Canal**
```html
<a 
  id="social-youtube-canal"
  data-track="click-social"
  data-social="youtube"
  data-content="live-redacao"
  data-section="contato"
  href="https://www.youtube.com/live/Rxj6QHEXTE4?si=JngzEb439W_1b5pG"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `social-youtube-canal` | ID único do link |
| `data-track` | `click-social` | Tipo de evento |
| `data-social` | `youtube` | Rede social |
| `data-content` | `live-redacao` | Tipo de conteúdo |
| `data-section` | `contato` | Seção da página |

---

### **WhatsApp Contato**
```html
<a 
  id="social-whatsapp-contato"
  data-track="click-social"
  data-social="whatsapp"
  data-action="mensagem"
  data-section="contato"
  href="https://wa.me/message/F2DEX6QPKWSAB1"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `social-whatsapp-contato` | ID único do link |
| `data-track` | `click-social` | Tipo de evento |
| `data-social` | `whatsapp` | Rede social |
| `data-action` | `mensagem` | Ação esperada |
| `data-section` | `contato` | Seção da página |

---

## 🧭 BOTÃO DE NAVEGAÇÃO

### **Ver Planos e Preços (Hero Section)**
```html
<a 
  id="btn-ver-planos-hero"
  data-track="click-navigation"
  data-destination="planos"
  data-section="hero"
  href="#planos"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-ver-planos-hero` | ID único do botão |
| `data-track` | `click-navigation` | Tipo de evento |
| `data-destination` | `planos` | Destino da navegação |
| `data-section` | `hero` | Seção de origem |

---

### **É Muito Simples e Rápido (Passo a Passo)**
```html
<a 
  id="btn-ver-planos-passo-a-passo"
  data-track="click-navigation"
  data-destination="planos"
  data-section="passo-a-passo"
  href="#planos"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-ver-planos-passo-a-passo` | ID único do link |
| `data-track` | `click-navigation` | Tipo de evento |
| `data-destination` | `planos` | Destino da navegação |
| `data-section` | `passo-a-passo` | Seção de origem |

---

### **Inscreva-se (Header/Menu Superior)**
```html
<a 
  id="btn-inscrevase-header"
  data-track="click-navigation"
  data-section="header"
  data-destination="passo-a-passo"
  href="#passo-a-passo"
>
```

**Dados Capturados:**
| Atributo | Valor | Descrição |
|----------|-------|-----------|
| `id` | `btn-inscrevase-header` | ID único do botão |
| `data-track` | `click-navigation` | Tipo de evento |
| `data-section` | `header` | Seção de origem |
| `data-destination` | `passo-a-passo` | Destino da navegação |

---

## 🔍 CATEGORIAS DE TRACKING

### **1. Conversão de Planos**
```javascript
// Evento: click-plano
// IDs:
- btn-plano-basico-regular
- btn-plano-completo-regular
- btn-plano-basico-promo
- btn-plano-completo-promo
```

### **2. Inscrições**
```javascript
// Evento: click-inscricao
// IDs:
// NENHUM - Botão foi convertido para navegação interna
```

### **3. Redes Sociais**
```javascript
// Evento: click-social
// IDs:
- social-instagram-oficial
- social-instagram-podcast
- social-youtube-canal
- social-whatsapp-contato
```

### **4. Navegação Interna**
```javascript
// Evento: click-navigation
// IDs:
- btn-ver-planos-hero
- btn-ver-planos-passo-a-passo
- btn-inscricao-formulario
- btn-inscrevase-header
```

---

## 📊 EXEMPLO DE IMPLEMENTAÇÃO GOOGLE ANALYTICS 4

### **Código JavaScript para Tracking:**

```javascript
// Tracking de Cliques em Planos
document.querySelectorAll('[data-track="click-plano"]').forEach(button => {
  button.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset;
    
    gtag('event', 'click_plano', {
      plan_type: data.plan,
      plan_price: data.price,
      section: data.section,
      is_promotion: data.promotion === 'true',
      original_price: data.originalPrice || null,
      discount: data.discount || null,
      badge: data.badge || null,
      deadline: data.deadline || null
    });
  });
});

// Tracking de Inscrições
document.querySelectorAll('[data-track="click-inscricao"]').forEach(button => {
  button.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset;
    
    gtag('event', 'click_inscricao', {
      section: data.section,
      action: data.action,
      destination: data.destination
    });
  });
});

// Tracking de Redes Sociais
document.querySelectorAll('[data-track="click-social"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset;
    
    gtag('event', 'click_social', {
      social_network: data.social,
      account: data.account || null,
      content: data.content || null,
      action: data.action || null,
      section: data.section
    });
  });
});

// Tracking de Navegação Interna
document.querySelectorAll('[data-track="click-navigation"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset;
    
    gtag('event', 'click_navigation', {
      destination: data.destination,
      section: data.section,
      link_url: e.currentTarget.href
    });
  });
});
```

---

## 🎯 EXEMPLO DE IMPLEMENTAÇÃO FACEBOOK PIXEL

```javascript
// Tracking de Conversão de Planos
document.querySelectorAll('[data-track="click-plano"]').forEach(button => {
  button.addEventListener('click', (e) => {
    const data = e.currentTarget.dataset;
    
    fbq('track', 'InitiateCheckout', {
      content_name: `Plano ${data.plan}`,
      content_category: data.section,
      value: parseFloat(data.price),
      currency: 'BRL',
      content_type: data.promotion === 'true' ? 'promocional' : 'regular'
    });
  });
});

// Tracking de Leads (Inscrições)
document.querySelectorAll('[data-track="click-inscricao"]').forEach(button => {
  button.addEventListener('click', (e) => {
    fbq('track', 'Lead', {
      content_name: 'Formulário de Inscrição',
      content_category: 'inscricao'
    });
  });
});
```

---

## 📈 MÉTRICAS RECOMENDADAS PARA ACOMPANHAR

### **Conversão:**
✅ Taxa de clique nos planos regulares vs promocionais  
✅ Performance de cada plano (Básico vs Completo)  
✅ Impacto dos badges ("Mais Popular" e "Melhor Oferta")  
✅ Taxa de conversão da promoção relâmpago  

### **Engajamento:**
✅ Cliques no formulário de inscrição  
✅ Interação com redes sociais  
✅ Tempo na página  
✅ Scroll depth  

### **Comparação:**
✅ Planos regulares vs promocionais  
✅ Plano Básico vs Completo  
✅ Seções com maior engajamento  
✅ Horários de maior conversão  

---

## 🔗 URLS DE DESTINO

### **Hotmart (Checkout):**
- Plano Básico Regular: `https://pay.hotmart.com/T103705923C`
- Plano Completo Regular: `https://pay.hotmart.com/L103735493W`
- Plano Básico Promocional: `https://pay.hotmart.com/D103797634A`
- Plano Completo Promocional: `https://pay.hotmart.com/M103797378J`

### **Plataforma:**
- Login/Inscrição: `https://geracaomil.com.br/login/index.php`

### **Redes Sociais:**
- Instagram Oficial: `https://www.instagram.com/geracaomil`
- Instagram Podcast: `https://www.instagram.com/podcastgeracaomil`
- YouTube: `https://www.youtube.com/live/Rxj6QHEXTE4`
- WhatsApp: `https://wa.me/message/F2DEX6QPKWSAB1`

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

- [x] IDs únicos em todos os botões de conversão
- [x] Data-attributes completos para tracking
- [x] Separação entre planos regulares e promocionais
- [x] Tracking de redes sociais
- [x] Tracking de inscrições
- [x] Metadados de preços e descontos
- [x] Informações de deadline (promoção)
- [x] Badges e categorias especiais

---

## 📝 NOTAS IMPORTANTES

1. **Todos os IDs são únicos** - Nenhum ID é duplicado na página
2. **Data-attributes consistentes** - Padrão uniforme em toda a landing page
3. **Compatível com GA4 e Facebook Pixel** - Estrutura preparada para ambas as plataformas
4. **Rastreamento de conversão completo** - Captura dados de preços, descontos e prazos
5. **Seções bem identificadas** - Fácil análise de performance por seção da página

---

**Última Atualização:** 10/01/2026  
**Versão:** 1.0  
**Status:** ✅ Implementado