import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Set document title
    document.title = 'Geração MIL - Curso Pré-Vestibular | Preparação ENEM e Vestibulares';
    
    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, type: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${type}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(type, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // SEO Meta Tags
    updateMetaTag('description', 'Curso pré-vestibular completo online. Mais de 1.000 alunos aprovados. Professores especializados, +250 videoaulas, material didático completo e acompanhamento personalizado. Aprovação garantida no ENEM e principais vestibulares.');
    updateMetaTag('keywords', 'curso pré-vestibular, ENEM, vestibular, preparatório online, aulas online, professores especializados, aprovação garantida, Geração MIL');
    updateMetaTag('author', 'Geração MIL');
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', 'Geração MIL - Curso Pré-Vestibular | Preparação ENEM e Vestibulares', 'property');
    updateMetaTag('og:description', 'Mais de 1.000 alunos aprovados. Curso completo com professores especializados, +250 videoaulas e material didático atualizado.', 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:locale', 'pt_BR', 'property');
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Geração MIL - Curso Pré-Vestibular');
    updateMetaTag('twitter:description', 'Preparação completa para ENEM e vestibulares. +1.000 alunos aprovados!');
    
    // Performance & Mobile Optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    updateMetaTag('theme-color', '#1c398e');
    updateMetaTag('mobile-web-app-capable', 'yes');
    
    // Prevent indexing of specific sections (optional)
    // updateMetaTag('robots', 'index, follow');
    
  }, []);

  return null;
}
