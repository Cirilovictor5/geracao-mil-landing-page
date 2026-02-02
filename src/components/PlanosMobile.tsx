export default function PlanosMobile() {
  return (
    <section 
      id="planos"
      className="block md:hidden w-full py-5 px-4 bg-gradient-to-b from-white to-[#f0f4ff]"
      data-name="PlanosMobile"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-2">
          <div className="bg-gradient-to-r from-[#1c398e] to-[#2d4db5] px-3.5 py-0.5 rounded-full shadow-sm">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[16px] text-white text-center">
              💰 ESCOLHA SEU PLANO
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-2.5">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[30px] text-[#1c398e] text-center mb-1">
            Planos de<br />
            <span className="text-[#fdc700]">Matrícula</span>
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#364153] text-center px-3">
            Escolha o plano ideal para você e comece sua preparação para o vestibular
          </p>
        </div>

        {/* Card Plano Completo - MINI */}
        <div className="relative bg-gradient-to-br from-[#fdc700] to-[#fdb700] rounded-lg p-3 mb-2.5 shadow-xl border-2 border-[#fdc700]">
          {/* Badge "MAIS POPULAR" */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#1c398e] px-2.5 py-0.5 rounded-full shadow-md z-10">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[9px] leading-[12px] text-[#fdc700] text-center">
              ⭐ MAIS POPULAR
            </p>
          </div>

          {/* NOVO: Badge de Promoção - Lado Superior Direito */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-br from-red-600 to-red-500 px-3 py-1.5 rounded-full shadow-lg z-10 border-2 border-white animate-pulse">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[10px] leading-[12px] text-white text-center">
              🔥 -40%
            </p>
          </div>

          {/* Cabeçalho do Plano */}
          <div className="text-center mb-2 mt-0.5">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-0.5">
              Plano Completo
            </h3>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[14px] text-[#193cb8]">
              📚 Todas as disciplinas
            </p>
          </div>

          {/* Preço COM DESTAQUE DE PROMOÇÃO */}
          <div className="text-center mb-2 pb-2 border-b-2 border-[#1c398e]/40">
            {/* Preço Original Riscado */}
            <div className="mb-1">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[16px] text-[#193cb8] line-through opacity-70">
                De R$ 199,90
              </span>
            </div>
            
            {/* Preço Promocional */}
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[36px] text-[#1c398e]">
                R$ 59,90
              </span>
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#193cb8]">
                /mês
              </span>
            </div>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[10px] leading-[14px] text-red-700">
              ⚡ ECONOMIA DE R$ 70,00/mês!
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[9px] leading-[12px] text-[#193cb8] mt-1">
              ⏰ A partir de fevereiro/2026
            </p>
          </div>

          {/* Lista de Benefícios - MINI */}
          <div className="space-y-1 mb-2.5">
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[10px] leading-[14px] text-[#1c398e] flex-1">
                📚 TODAS as disciplinas
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8] flex-1">
                🎥 Aulas ao vivo diárias
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8] flex-1">
                📹 +250 videoaulas
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8] flex-1">
                📝 +400 exercícios
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8] flex-1">
                📖 12 apostilas PDF
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8] flex-1">
                🎯 Simulados semanais
              </p>
            </div>
          </div>

          {/* Botão CTA */}
          <a
            href="https://pay.hotmart.com/Q104185324S?bid=1769998742696"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-plano-completo-mobile"
            data-track="click-plano"
            data-plan="completo"
            data-price="59.90"
            data-section="planos-mobile"
            data-promotion="false"
            data-badge="mais-popular"
            className="block w-full bg-gradient-to-r from-[#1c398e] to-[#193cb8] hover:shadow-lg transition-all rounded-md py-2 font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[16px] text-[#fdc700] text-center shadow-sm"
          >
            🎓 ESCOLHER PLANO COMPLETO
          </a>
        </div>

        {/* Divisor */}
        <div className="relative flex items-center gap-2 mb-2.5 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent"></div>
          <p className="font-['Arimo:Regular',sans-serif] text-[9px] leading-[12px] text-[#6b7280] relative z-10 bg-white px-2">
            ou
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent"></div>
        </div>

        {/* Card Plano Básico - MINI */}
        <div className="bg-white rounded-lg p-3 mb-4 shadow-sm border border-[#e5e7eb]">
          {/* Cabeçalho do Plano */}
          <div className="text-center mb-2">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-0.5">
              Plano Básico
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#6b7280]">
              ✍️ Redação + 🔢 Matemática
            </p>
          </div>

          {/* Preço */}
          <div className="text-center mb-2 pb-2 border-b border-[#e5e7eb]">
            <div className="flex items-center justify-center gap-1">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[32px] text-[#1c398e]">
                R$ 29,90
              </span>
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[16px] text-[#6b7280]">
                /mês
              </span>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[9px] leading-[12px] text-[#9ca3af] mt-0.5">
              ⏰ A partir de fevereiro/2026
            </p>
          </div>

          {/* Lista de Benefícios - MINI */}
          <div className="space-y-1 mb-2.5">
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#364153] flex-1">
                2 disciplinas principais
              </p>
            </div>
            
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#364153] flex-1">
                Aulas ao vivo diárias
              </p>
            </div>
            
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#364153] flex-1">
                10 videoaulas/mês
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#364153] flex-1">
                Apostilas e exercícios
              </p>
            </div>
          </div>

          {/* Botão CTA */}
          <a 
            href="https://pay.hotmart.com/U104186150S?bid=1769998745714"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-plano-basico-mobile"
            data-track="click-plano"
            data-plan="basico"
            data-price="29.90"
            data-section="planos-mobile"
            data-promotion="false"
            className="block w-full bg-gradient-to-r from-[#1c398e] to-[#2d4db5] hover:shadow-lg transition-all rounded-md py-2 font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[16px] text-white text-center shadow-sm"
          >
            ESCOLHER PLANO BÁSICO
          </a>
        </div>

        {/* Footer informativo */}
        <div className="text-center">
          <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#6b7280]">
            💳 Pagamento 100% seguro via Hotmart<br />
            🔒 Seus dados estão protegidos
          </p>
        </div>
      </div>
    </section>
  );
}