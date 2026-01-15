export default function MateriaisDidaticosSection() {
  return (
    <section 
      className="block md:hidden w-full py-8 px-4 bg-white relative overflow-hidden"
      data-name="MateriaisDidaticosSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          <div className="bg-[#fdc700] px-5 py-1.5 rounded-full">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-[#1c398e] text-center">
              CONTEÚDO COMPLETO
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-5">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[26px] leading-[32px] text-[#1c398e] text-center mb-2">
            Materiais<br />didáticos
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#364153] text-center px-2">
            Conteúdo completo e atualizado para o ENEM e principais vestibulares do Brasil
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {/* Card 1 - Apostilas */}
          <div className="bg-[#1c398e] rounded-xl overflow-hidden shadow-2xl p-4 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-[#fdc700] rounded-lg p-2 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-1">
                  Apostilas
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                  Material completo com teoria e exercícios
                </p>
                <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[15px] text-[#fdc700] mt-1">
                  ⏰ Acesso em até 48h após confirmação do pagamento e matrícula
                </p>
              </div>
            </div>
            
            <div className="bg-[#193cb8] rounded-lg p-3 text-center border border-[#fdc700]/30">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[36px] text-[#fdc700]">
                12
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-white uppercase tracking-wide">
                VOLUMES
              </p>
            </div>
          </div>

          {/* Card 2 - Videoaulas */}
          <div className="bg-[#1c398e] rounded-xl overflow-hidden shadow-2xl p-4 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-[#fdc700] rounded-lg p-2 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 7L16 12L23 17V7Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-1">
                  Videoaulas Gravadas
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                  Mais de 250 aulas em alta definição (5 a 10 por disciplina)
                </p>
                <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[15px] text-[#fdc700] mt-1">
                  ⏰ Acesso em até 48h após confirmação do pagamento e matrícula
                </p>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[10px] leading-[14px] text-white mt-1.5 bg-[#193cb8] rounded-md px-2 py-1 border border-[#fdc700]/30">
                  📅 Disponibilizadas progressivamente: 5 a 10 aulas/mês a partir de fevereiro
                </p>
              </div>
            </div>
            
            <div className="bg-[#193cb8] rounded-lg p-3 text-center border border-[#fdc700]/30">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[36px] text-[#fdc700]">
                +250
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-white uppercase tracking-wide">
                AULAS
              </p>
            </div>
          </div>

          {/* Card 3 - Simulados */}
          <div className="bg-[#1c398e] rounded-xl overflow-hidden shadow-2xl p-4 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-[#fdc700] rounded-lg p-2 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-1">
                  Simulados
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                  Provas completas estilo ENEM
                </p>
              </div>
            </div>
            
            <div className="bg-[#193cb8] rounded-lg p-3 text-center border border-[#fdc700]/30">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[36px] text-[#fdc700]">
                ∞
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-white uppercase tracking-wide">
                SEMANAIS
              </p>
            </div>
          </div>

          {/* Card 4 - Exercícios */}
          <div className="bg-[#1c398e] rounded-xl overflow-hidden shadow-2xl p-4 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-[#fdc700] rounded-lg p-2 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-1">
                  Exercícios
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                  Listas com gabarito comentado
                </p>
                <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[15px] text-[#fdc700] mt-1">
                  📅 Liberadas gradualmente ao longo do curso
                </p>
              </div>
            </div>
            
            <div className="bg-[#193cb8] rounded-lg p-3 text-center border border-[#fdc700]/30">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[36px] text-[#fdc700]">
                +400
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[13px] leading-[18px] text-white uppercase tracking-wide">
                QUESTÕES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}