export default function PlanosMobile() {
  return (
    <section 
      id="planos"
      className="block md:hidden w-full py-8 px-4 bg-gradient-to-b from-white via-[#f0f4ff] to-white relative overflow-hidden"
      data-name="PlanosMobile"
    >
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-5 w-32 h-32 bg-[#fdc700] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-5 w-40 h-40 bg-[#1c398e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        {/* Badge com Animação */}
        <div className="flex justify-center mb-3 animate-bounce">
          <div className="bg-gradient-to-r from-[#1c398e] via-[#2d4db5] to-[#1c398e] px-4 py-1.5 rounded-full shadow-lg border-2 border-[#fdc700]">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[16px] text-[#fdc700] text-center">
              💰 ESCOLHA SEU PLANO
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-4">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[34px] text-[#1c398e] text-center mb-1.5">
            Planos de<br />
            <span className="text-[#fdc700] drop-shadow-lg">Matrícula</span>
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#364153] text-center px-3">
            Escolha o plano ideal para você e comece sua preparação para o vestibular
          </p>
        </div>

        {/* Card Plano Completo - DESTAQUE MÁXIMO */}
        <div 
          className="relative bg-gradient-to-br from-[#fdc700] via-[#ffd700] to-[#fdb700] rounded-2xl p-4 mb-4 shadow-2xl border-4 border-[#1c398e] transform hover:scale-105 transition-all duration-300"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        >
          {/* Badge "MAIS POPULAR" - Aumentado */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1c398e] to-[#193cb8] px-4 py-1.5 rounded-full shadow-xl z-10 border-2 border-[#fdc700]">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[14px] text-[#fdc700] text-center">
              ⭐ MAIS POPULAR ⭐
            </p>
          </div>

          {/* Brilho Decorativo */}
          <div className="absolute top-3 right-3 w-16 h-16 bg-white rounded-full opacity-20 blur-xl"></div>

          {/* Cabeçalho do Plano */}
          <div className="text-center mb-3 mt-1">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-[#1c398e] mb-1 drop-shadow-md">
              Plano Completo
            </h3>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[16px] text-[#193cb8]">
              📚 Todas as disciplinas
            </p>
          </div>

          {/* Preço DESTAQUE */}
          <div className="text-center mb-3 pb-3 border-b-2 border-[#1c398e]/30">
            <div className="bg-white/40 rounded-xl py-2 px-3 mb-2 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[40px] leading-[44px] text-[#1c398e] drop-shadow-lg">
                  R$ 59,90
                </span>
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[20px] text-[#193cb8]">
                  /mês
                </span>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8]">
                ⏰ A partir de fevereiro/2026
              </p>
            </div>
          </div>

          {/* Lista de Benefícios */}
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center gap-2 bg-white/30 rounded-lg p-1.5 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[16px] text-[#1c398e] flex-1">
                📚 TODAS as disciplinas
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/30 rounded-lg p-1.5 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#193cb8] flex-1">
                🎥 Aulas ao vivo diárias
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/30 rounded-lg p-1.5 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#193cb8] flex-1">
                📹 +250 videoaulas
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/30 rounded-lg p-1.5 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#193cb8] flex-1">
                📝 +400 exercícios
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/30 rounded-lg p-1.5 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#193cb8] flex-1">
                📖 12 apostilas PDF
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/30 rounded-lg p-1.5 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="#fdc700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#193cb8] flex-1">
                🎯 Simulados semanais
              </p>
            </div>
          </div>

          {/* Botão CTA - AMPLIADO */}
          <a
            href="https://pay.hotmart.com/L103735493W"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-plano-completo-mobile"
            data-track="click-plano"
            data-plan="completo"
            data-price="59.90"
            data-section="planos-mobile"
            data-promotion="false"
            data-badge="mais-popular"
            className="block w-full bg-gradient-to-r from-[#1c398e] via-[#193cb8] to-[#1c398e] hover:shadow-2xl transition-all rounded-xl py-3 font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#fdc700] text-center shadow-xl transform hover:scale-105"
          >
            🎓 ESCOLHER PLANO COMPLETO
          </a>
        </div>

        {/* Divisor com Animação */}
        <div className="relative flex items-center gap-2 mb-4 py-4">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[#1c398e] to-transparent"></div>
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[10px] leading-[14px] text-[#1c398e] relative z-10 bg-white px-3 py-1 rounded-full border-2 border-[#1c398e]">
            ou
          </p>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-[#1c398e] to-transparent"></div>
        </div>

        {/* Card Plano Básico - MELHORADO */}
        <div className="relative bg-gradient-to-br from-white to-[#f8faff] rounded-xl p-4 mb-5 shadow-xl border-3 border-[#1c398e] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          {/* Decoração de canto */}
          <div className="absolute top-3 right-3 w-12 h-12 bg-[#fdc700] rounded-full opacity-10 blur-lg"></div>
          
          {/* Cabeçalho do Plano */}
          <div className="text-center mb-3">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-[#1c398e] mb-1">
              Plano Básico
            </h3>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-[#6b7280]">
              ✍️ Redação + 🔢 Matemática
            </p>
          </div>

          {/* Preço */}
          <div className="text-center mb-3 pb-3 border-b-2 border-[#e5e7eb]">
            <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f0ff] rounded-lg py-2 px-3 mb-1">
              <div className="flex items-center justify-center gap-1.5">
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[34px] leading-[38px] text-[#1c398e] drop-shadow-md">
                  R$ 29,90
                </span>
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[18px] text-[#6b7280]">
                  /mês
                </span>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#9ca3af] mt-0.5">
                ⏰ A partir de fevereiro/2026
              </p>
            </div>
          </div>

          {/* Lista de Benefícios */}
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center gap-2 bg-[#f0f4ff] rounded-lg p-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[11px] leading-[18px] text-[#364153] flex-1">
                2 disciplinas principais
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-[#f0f4ff] rounded-lg p-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[18px] text-[#364153] flex-1">
                Aulas ao vivo diárias
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-[#f0f4ff] rounded-lg p-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[18px] text-[#364153] flex-1">
                10 videoaulas/mês
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#f0f4ff] rounded-lg p-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1c398e" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[18px] text-[#364153] flex-1">
                Apostilas e exercícios
              </p>
            </div>
          </div>

          {/* Botão CTA */}
          <a
            href="https://pay.hotmart.com/T103705923C"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-plano-basico-mobile"
            data-track="click-plano"
            data-plan="basico"
            data-price="29.90"
            data-section="planos-mobile"
            data-promotion="false"
            className="block w-full bg-gradient-to-r from-[#1c398e] via-[#2d4db5] to-[#1c398e] hover:shadow-2xl transition-all rounded-lg py-3 font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-white text-center shadow-lg transform hover:scale-105"
          >
            ESCOLHER PLANO BÁSICO
          </a>
        </div>

        {/* Footer informativo */}
        <div className="text-center bg-gradient-to-r from-[#f0f4ff] to-[#fff8e1] rounded-xl p-3 shadow-md">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-[#1c398e] mb-1">
            💳 Pagamento 100% seguro via Hotmart
          </p>
          <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#6b7280]">
            🔒 Seus dados estão protegidos
          </p>
        </div>
      </div>
    </section>
  );
}
