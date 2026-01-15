import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preconnect to external domains
    const preconnectDomains = [
      'https://pay.hotmart.com',
      'https://wa.me',
      'https://www.youtube.com',
      'https://www.instagram.com',
      'https://www.facebook.com'
    ];

    preconnectDomains.forEach(domain => {
      // Check if link already exists
      const existingLink = document.querySelector(`link[href="${domain}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // DNS Prefetch for better performance
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const existingLink = document.querySelector(`link[href="${domain}"][rel="dns-prefetch"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

  }, []);

  return null;
}
