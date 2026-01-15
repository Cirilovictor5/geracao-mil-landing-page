import { ImageWithFallback } from './figma/ImageWithFallback';
import imgLogoGMNovo from "figma:asset/7e66070eb25e0b43b53e33be783a9836430cfbae.png";

export default function PromocaoRelampagoMobile() {
  return (
    <section 
      id="promocao"
      className="block md:hidden w-full py-5 px-4 bg-gradient-to-br from-[#ff0844] via-[#ff3366] to-[#ff0844] relative overflow-hidden"
      data-name="PromocaoRelampagoMobile"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Logo GM com círculo amarelo - REDUZIDO */}
        <div className="flex justify-center mb-2">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-[#fdc700] rounded-full shadow-md"></div>
            <img 
              src={imgLogoGMNovo}
              alt="Geração MIL - Logo GM" 
              className="relative z-10 w-9 h-9 object-contain"
            />
          </div>
        </div>

        {/* Badge PROMOÇÃO RELÂMPAGO */}
        <div className="flex justify-center mb-3">
          <div className="bg-[#fdc700] px-4 py-1.5 rounded-full shadow-md">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[16px] text-[#1c398e] text-center">
              ⚡ PROMOÇÃO RELÂMPAGO - 48H ⚡
            </p>
          </div>
        </div>

        {/* Título - COMPACTO */}
        <div className="text-center mb-3">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-1.5">
            🔥 Última Chance para Garantir Desconto!
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-white px-2">
            Válido apenas no dia <span className="font-bold text-[#fdc700]">16/01/2026</span> por <span className="font-bold text-[#fdc700]">48 horas</span>
          </p>
        </div>

        {/* Card Plano Básico Promocional - COMPACTO */}
        <div className="bg-white rounded-xl p-4 mb-3 shadow-lg">
          <div className="text-center">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-0.5">
              Plano Básico
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] mb-2.5">
              Redação + Matemática
            </p>

            {/* Preços */}
            <div className="mb-3">
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] text-[#6a7282] line-through mb-0.5">
                De R$ 89,90
              </p>
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[36px] text-[#ff0844]">
                  R$ 59,90
                </span>
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#4a5565]">
                  /mês
                </span>
              </div>
              <div className="inline-block bg-[#fdc700] rounded-md px-3 py-0.5">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[16px] text-[#1c398e]">
                  💰 ECONOMIA DE R$ 30,00
                </p>
              </div>
            </div>

            {/* Botão */}
            <a 
              href="https://pay.hotmart.com/D103797634A" 
              target="_blank" 
              rel="noopener noreferrer"
              id="btn-plano-basico-promo-mobile"
              data-track="click-plano"
              data-plan="basico"
              data-price="59.90"
              data-original-price="89.90"
              data-discount="30.00"
              data-section="promocao-relampago-mobile"
              data-promotion="true"
              data-deadline="2026-01-16T23:59:59"
              className="block w-full bg-gradient-to-r from-[#ff0844] to-[#ff3366] hover:shadow-xl transition-all rounded-lg py-2.5 font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-white text-center shadow-md"
            >
              🚀 GARANTIR DESCONTO
            </a>
          </div>
        </div>

        {/* Card Plano Completo Promocional - DESTAQUE COMPACTO */}
        <div className="relative bg-gradient-to-br from-[#fdc700] to-[#ffdf20] rounded-xl p-4 mb-4 shadow-xl border-2 border-white">
          {/* Badge MELHOR OFERTA */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#1c398e] px-4 py-1 rounded-full shadow-md">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[10px] leading-[14px] text-[#fdc700] text-center">
              ⭐ MELHOR OFERTA
            </p>
          </div>

          <div className="text-center mt-0.5">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-[#1c398e] mb-0.5">
              Plano Completo
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[16px] text-[#193cb8] mb-2.5">
              Todas as Disciplinas
            </p>

            {/* Preços */}
            <div className="mb-3">
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] text-[#193cb8] line-through mb-0.5">
                De R$ 129,90
              </p>
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[36px] leading-[40px] text-[#ff0844]">
                  R$ 99,90
                </span>
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                  /mês
                </span>
              </div>
              <div className="inline-block bg-[#1c398e] rounded-md px-3 py-0.5">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[16px] text-[#fdc700]">
                  💰 ECONOMIA DE R$ 30,00
                </p>
              </div>
            </div>

            {/* Botão */}
            <a 
              href="https://pay.hotmart.com/M103797378J" 
              target="_blank" 
              rel="noopener noreferrer"
              id="btn-plano-completo-promo-mobile"
              data-track="click-plano"
              data-plan="completo"
              data-price="99.90"
              data-original-price="129.90"
              data-discount="30.00"
              data-section="promocao-relampago-mobile"
              data-promotion="true"
              data-badge="melhor-oferta"
              data-deadline="2026-01-16T23:59:59"
              className="block w-full bg-[#1c398e] hover:shadow-xl transition-all rounded-lg py-3 font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[22px] text-[#fdc700] text-center shadow-lg"
            >
              ⭐ GARANTIR DESCONTO
            </a>
          </div>
        </div>

        {/* Aviso Final - COMPACTO */}
        <div className="text-center mb-2">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-[#fdc700] mb-1">
            ⏰ Oferta expira em 18/01/2026 às 23:59h
          </p>
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[16px] text-white">
            Vagas Limitadas!
          </p>
        </div>

        {/* Footer informativo */}
        <div className="text-center border-t-2 border-white/20 pt-2.5">
          <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[15px] text-white">
            💳 Parcelamento em até 12x no cartão<br />
            🔒 Pagamento seguro via Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}