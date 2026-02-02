import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import imgLogoGMNovo from "figma:asset/7e66070eb25e0b43b53e33be783a9836430cfbae.png";

export default function FooterMobile() {
  return (
    <footer 
      className="block md:hidden w-full bg-[#1c398e] py-8 px-4"
      data-name="FooterMobile"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Logo e Descrição */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src={imgLogoGMNovo} 
              alt="Geração MIL" 
              className="w-12 h-12 object-contain"
            />
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-white">
              GERAÇÃO MIL
            </h3>
          </div>
          <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff]">
            Curso pré-vestibular. Preparando você para conquistar sua aprovação no ENEM e principais vestibulares.
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-3 mb-6">
          <a 
            href="https://www.facebook.com/geracaomil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#fdc700] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-[#1c398e]" />
          </a>
          <a 
            href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#fdc700] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-[#1c398e]" />
          </a>
          <a 
            href="https://www.linkedin.com/company/geracaomil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#fdc700] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-[#1c398e]" />
          </a>
        </div>

        {/* Links Rápidos */}
        <div className="mb-6">
          <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-white mb-3">
            Links Rápidos
          </h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://geracaomil.com.br/login/index.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff] hover:text-white transition-colors"
              >
                Plataforma
              </a>
            </li>
            <li>
              <a 
                href="#sobre" 
                className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff] hover:text-white transition-colors"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a 
                href="#depoimentos" 
                className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff] hover:text-white transition-colors"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff] hover:text-white transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Cursos */}
        <div className="mb-6">
          <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-white mb-3">
            Cursos
          </h4>
          <ul className="space-y-2">
            <li>
              <span className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff]">
                Extensivo Anual
              </span>
            </li>
            <li>
              <span className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff]">
                Semi-intensivo
              </span>
            </li>
            <li>
              <span className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff]">
                Intensivo ENEM
              </span>
            </li>
            <li>
              <span className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff]">
                Medicina Específico
              </span>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="mb-6">
          <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-white mb-3">
            Contato
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#bedbff] flex-shrink-0" />
              <span className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff]">
                Salvador, BA
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#bedbff] flex-shrink-0" />
              <a 
                href="tel:+5571987135175"
                className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff] hover:text-white transition-colors"
              >
                (71) 98713-5175
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#bedbff] flex-shrink-0" />
              <a 
                href="mailto:contato@geracaomil.com.br"
                className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#bedbff] hover:text-white transition-colors"
              >
                contato@geracaomil.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-[#193cb8] my-6"></div>

        {/* Copyright e Links Legais */}
        <div className="text-center">
          <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#bedbff] mb-3">
            © 2025 Geração MIL. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#termos" 
              className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#bedbff] hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <span className="text-[#bedbff]">•</span>
            <a 
              href="#privacidade" 
              className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#bedbff] hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}