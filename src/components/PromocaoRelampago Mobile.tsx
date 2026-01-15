import imgLogoGMNovo from "figma:asset/d5eff9ccbbbe4a4fcda3e74f1f38aa3a1acb3f16.png";

export default function PromocaoRelampagoMobile() {
  return (
    <section 
      id="promocao-relampago"
      className="block md:hidden w-full py-6 px-4 bg-gradient-to-br from-[#ff0844] via-[#ff3366] to-[#ff0844] relative overflow-hidden"
      data-name="PromocaoRelampagoMobile"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Logo GM com círculo amarelo */}
        <div className="flex justify-center mb-3">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute w-16 h-16 bg-[#fdc700] rounded-full shadow-lg"></div>
            <img 
              src={imgLogoGMNovo}
              alt="Geração MIL - Logo GM" 
              className="relative z-10 w-12 h-12 object-contain"
            />
          </div>
        </div>

        {/* Badge PROMOÇÃO RELÂMPAGO */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#fdc700] px-5 py-2 rounded-full shadow-lg">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-[#1c398e] text-center">
              ⚡ PROMOÇÃO RELÂMPAGO - 48H ⚡
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-4">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white mb-2">
            🔥 Última Chance para Garantir Desconto!
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-white px-2">
            Válido apenas no dia <span className="font-bold text-[#fdc700]">16/01/2026</span> por <span className="font-bold text-[#fdc700]">48 horas</span>
          </p>
        </div>

        {/* Card Plano Básico Promocional */}
        <div className="bg-white rounded-2xl p-5 mb-4 shadow-2xl">
          <div className="text-center">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-[#1c398e] mb-1">
              Plano Básico
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565] mb-3">
              Redação + Matemática
            </p>

            {/* Preços */}
            <div className="mb-4">
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] text-[#6a7282] line-through mb-1">
                De R$ 89,90
              </p>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[36px] leading-[40px] text-[#ff0844]">
                  R$ 59,90
                </span>
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[22px] text-[#4a5565] pb-1">
                  /mês
                </span>
              </div>
              <div className="inline-block bg-[#fdc700] rounded-lg px-4 py-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-[#1c398e]">
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
              className="block w-full bg-gradient-to-r from-[#ff0844] to-[#ff3366] hover:shadow-xl transition-all rounded-xl py-3.5 font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[22px] text-white text-center shadow-lg"
            >
              🚀 GARANTIR DESCONTO
            </a>
          </div>
        </div>

        {/* Card Plano Completo Promocional - DESTAQUE */}
        <div className="relative bg-gradient-to-br from-[#fdc700] to-[#ffdf20] rounded-2xl p-5 mb-5 shadow-2xl border-4 border-white">
          {/* Badge MELHOR OFERTA */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1c398e] px-5 py-1.5 rounded-full shadow-lg">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[16px] text-[#fdc700] text-center">
              ⭐ MELHOR OFERTA
            </p>
          </div>

          <div className="text-center mt-1">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-[#1c398e] mb-1">
              Plano Completo
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#193cb8] mb-3">
              Todas as Disciplinas
            </p>

            {/* Preços */}
            <div className="mb-4">
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] text-[#193cb8] line-through mb-1">
                De R$ 129,90
              </p>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[40px] leading-[44px] text-[#ff0844]">
                  R$ 99,90
                </span>
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[22px] text-[#1c398e] pb-2">
                  /mês
                </span>
              </div>
              <div className="inline-block bg-[#1c398e] rounded-lg px-4 py-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-[#fdc700]">
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
              className="block w-full bg-[#1c398e] hover:shadow-2xl transition-all rounded-xl py-4 font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-[#fdc700] text-center shadow-xl"
            >
              ⭐ GARANTIR DESCONTO
            </a>
          </div>
        </div>

        {/* Aviso Final */}
        <div className="text-center mb-3">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[20px] text-[#fdc700] mb-2">
            ⏰ Oferta expira em 18/01/2026 às 23:59h
          </p>
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-white">
            Vagas Limitadas!
          </p>
        </div>

        {/* Footer informativo */}
        <div className="text-center border-t-2 border-white/20 pt-3">
          <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-white">
            💳 Parcelamento em até 12x no cartão<br />
            🔒 Pagamento seguro via Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}
