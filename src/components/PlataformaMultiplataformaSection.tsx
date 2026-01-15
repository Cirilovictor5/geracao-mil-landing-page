import imgImageMascoteGeracaoMil from "figma:asset/c9fc7f56f185bfa26d203fa01f05a936678d7a8e.png";

export default function PlataformaMultiplataformaSection() {
  return (
    <section 
      className="block md:hidden w-full py-10 px-4 bg-white relative overflow-hidden"
      data-name="PlataformaMultiplataformaSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título */}
        <div className="mb-6">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#1c398e] text-center mb-1">
            Plataforma
          </h2>
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#fdc700] text-center mb-3">
            multiplataforma
          </h3>
          <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] text-center px-2">
            Estude para o ENEM e vestibulares onde, quando e como quiser. Nossa plataforma funciona perfeitamente em todos os dispositivos.
          </p>
        </div>

        {/* Box Amarelo - Informações Importantes */}
        <div className="bg-gradient-to-r from-[#fdc700] to-[#ffdf20] rounded-2xl p-4 shadow-xl mb-6">
          <div className="flex items-start gap-3 mb-4">
            <img 
              src={imgImageMascoteGeracaoMil} 
              alt="Mascote Geração MIL" 
              className="w-16 h-16 object-contain shrink-0"
            />
            <div>
              <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-[#1c398e] mb-3">
                📢 Informações Importantes da Plataforma
              </h4>
            </div>
          </div>

          <div className="space-y-3">
            {/* Item 1 */}
            <div className="flex items-start gap-2">
              <span className="text-[14px] shrink-0">📅</span>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#1c398e]">
                ⚡ Acesso aos cronogramas após confirmação do pagamento e inscrição em curso (48h)
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-2">
              <span className="text-[14px] shrink-0">📹</span>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#1c398e]">
                📹 <strong>+250 videoaulas gravadas</strong> (5 a 10 por disciplina) disponibilizadas progressivamente. Acesso em até 48h após confirmação do pagamento e matrícula
              </p>
            </div>

            {/* Destaque - Aulas ao vivo */}
            <div className="bg-[#1c398e] rounded-lg p-3 flex items-center gap-2">
              <span className="text-[18px]">🎓</span>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-white">
                AULAS AO VIVO COMEÇAM EM FEVEREIRO DE 2025!
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Dispositivos */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="space-y-6">
            {/* Desktop */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1c398e] rounded-2xl w-16 h-16 flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8.33333C5 6.49238 6.49238 5 8.33333 5H31.6667C33.5076 5 35 6.49238 35 8.33333V26.6667C35 28.5076 33.5076 30 31.6667 30H8.33333C6.49238 30 5 28.5076 5 26.6667V8.33333Z" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 35H26.6667" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 28.333V34.9997" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-2">
                Desktop
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] text-center">
                Aproveite a tela grande do computador para estudar com conforto
              </p>
            </div>

            {/* Tablet */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1c398e] rounded-2xl w-16 h-16 flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6667 5H13.3333C10.572 5 8.33333 7.23858 8.33333 10V30C8.33333 32.7614 10.572 35 13.3333 35H26.6667C29.428 35 31.6667 32.7614 31.6667 30V10C31.6667 7.23858 29.428 5 26.6667 5Z" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 30H20.0167" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-2">
                Tablet
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] text-center">
                Ideal para fazer anotações e revisar conteúdos
              </p>
            </div>

            {/* Smartphone */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1c398e] rounded-2xl w-16 h-16 flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3333 5H16.6667C13.9053 5 11.6667 7.23858 11.6667 10V30C11.6667 32.7614 13.9053 35 16.6667 35H23.3333C26.0947 35 28.3333 32.7614 28.3333 30V10C28.3333 7.23858 26.0947 5 23.3333 5Z" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 30H20.0167" stroke="#FDC700" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-2">
                Smartphone
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] text-center">
                Estude em qualquer lugar, direto do seu celular
              </p>
            </div>
          </div>
        </div>

        {/* Box Azul - Recursos da Plataforma */}
        <div className="bg-gradient-to-r from-[#1c398e] to-[#193cb8] rounded-2xl p-5 shadow-xl">
          <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[28px] text-white text-center mb-4">
            Recursos da plataforma
          </h4>

          <div className="space-y-3">
            {/* Recurso 1 - CARD COM FUNDO */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#fdc700] shadow-md">
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[20px] text-[#1c398e] mb-1">
                📹 Videoaulas HD
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565]">
                Aulas gravadas com altíssima qualidade de imagem e som
              </p>
            </div>

            {/* Recurso 2 - CARD COM FUNDO */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#fdc700] shadow-md">
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[20px] text-[#1c398e] mb-1">
                📚 Material completo
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565]">
                PDFs, resumos, exercícios e simulados para download
              </p>
            </div>

            {/* Recurso 3 - CARD COM FUNDO */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#fdc700] shadow-md">
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[20px] text-[#1c398e] mb-1">
                ⏰ Acesso ilimitado
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565]">
                Estude 24/7 no seu ritmo, sem restrições de horário
              </p>
            </div>

            {/* Recurso 4 - CARD COM FUNDO */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#fdc700] shadow-md">
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[20px] text-[#1c398e] mb-1">
                ✍️ Correção de redação
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565]">
                Envie suas redações e receba feedback detalhado
              </p>
            </div>

            {/* Recurso 5 - CARD COM FUNDO */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#fdc700] shadow-md">
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[20px] text-[#1c398e] mb-1">
                📊 Relatórios
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565]">
                Acompanhe seu progresso com estatísticas detalhadas
              </p>
            </div>

            {/* Recurso 6 - CARD COM FUNDO */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#fdc700] shadow-md">
              <h5 className="font-['Arimo:Bold',sans-serif] font-bold text-[15px] leading-[20px] text-[#1c398e] mb-1">
                🎯 Simulados
              </h5>
              <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#4a5565]">
                Teste seus conhecimentos com provas estilo ENEM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}