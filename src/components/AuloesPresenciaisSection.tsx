import imgImage13 from "figma:asset/bdc0eca7b87c5b1e7286be565548f0f3151117e1.png";
import imgImage14 from "figma:asset/e81957cd73a9e3246a1b187a5fd906479af41530.png";
import imgImage16 from "figma:asset/26e48fc145b926f86350dcf8f6bf30ff87334d29.png";
import imgImage15 from "figma:asset/ab2c3f30820c4c76ad6bb3397f7db8c4ba837f7e.png";

export default function AuloesPresenciaisSection() {
  return (
    <section 
      className="block md:hidden w-full py-10 px-4 relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(139.696deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}
      data-name="AuloesPresenciaisSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Badge Reconhecimento */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#fdc700] px-6 py-2 rounded-full">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e] text-center">
              RECONHECIMENTO NACIONAL
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-6">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-white text-center mb-1">
            Presença e
          </h2>
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#fdc700] text-center mb-3">
            autoridade
          </h3>
          <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#dbeafe] text-center px-2">
            Nossa trajetória é marcada por eventos, participações em mídias e um relacionamento próximo com milhares de alunos
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4 mb-6">
          {/* Card 1 - Aulões Presenciais */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[180px] overflow-hidden">
              <img 
                src={imgImage13} 
                alt="Aulões Presenciais" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[20px] text-[#1c398e]">
                  Aulões Presenciais
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#364153]">
                Eventos presenciais com centenas de alunos engajados
              </p>
            </div>
          </div>

          {/* Card 2 - Podcasts e Entrevistas */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[180px] overflow-hidden">
              <img 
                src={imgImage14} 
                alt="Podcasts e Entrevistas" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4C9 2.34315 10.3431 1 12 1Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19V23" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[20px] text-[#1c398e]">
                  Podcasts e Entrevistas
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#364153]">
                Participações em diversos programas e plataformas
              </p>
            </div>
          </div>

          {/* Card 3 - Momentos em Sala */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[180px] overflow-hidden">
              <img 
                src={imgImage16} 
                alt="Momentos em Sala" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 3V7" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 5H18" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 17V19" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 18H3" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[20px] text-[#1c398e]">
                  Momentos em Sala
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#364153]">
                Interação real com nossos alunos no dia a dia
              </p>
            </div>
          </div>

          {/* Card 4 - Eventos e Conquistas */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[180px] overflow-hidden">
              <img 
                src={imgImage15} 
                alt="Eventos e Conquistas" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15C4 15.5304 4.21071 16.0391 4.58579 16.4142C4.96086 16.7893 5.46957 17 6 17H18C18.5304 17 19.0391 16.7893 19.4142 16.4142C19.7893 16.0391 20 15.5304 20 15V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V15Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L10 2H14L12 5Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 22H20" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17V22" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17V22" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 9V13" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[20px] text-[#1c398e]">
                  Eventos e Conquistas
                </h4>
              </div>
            </div>
            <div className="p-4">
              <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#364153]">
                Celebrando aprovações e marcos importantes
              </p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="space-y-2">
          {/* Stat 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[30px] text-[#fdc700] mb-0.5">
              50+
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#dbeafe]">
              Eventos realizados
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[30px] text-[#fdc700] mb-0.5">
              15+
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#dbeafe]">
              Podcasts
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[30px] text-[#fdc700] mb-0.5">
              10mil+
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#dbeafe]">
              Alunos impactados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}