export default function RedesSociaisSection() {
  return (
    <section 
      className="block md:hidden w-full py-10 px-4 bg-white relative overflow-hidden"
      data-name="RedesSociaisSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título */}
        <div className="mb-6">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#1c398e] text-center mb-3">
            Siga nossas<br />redes sociais
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#364153] text-center px-2">
            Fique por dentro das novidades, dicas de estudo e motivação diária
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {/* Card 1 - YouTube */}
          <div className="bg-[#1c398e] rounded-2xl overflow-hidden shadow-2xl p-5 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#fdc700] rounded-xl p-3 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16134 5.19941C1.82071 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991228 9.97631 1 11.75C0.988779 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17823 18.2945C2.51815 18.6308 2.93884 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[24px] text-white mb-1">
                  YouTube
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[18px] text-[#fdc700]">
                  @geracaomil
                </p>
              </div>
            </div>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white mb-3">
              Aulas gratuitas, dicas de estudo e lives semanais com nossos professores
            </p>
            
            <div className="bg-[#193cb8] rounded-lg p-3 mb-4 border border-[#fdc700]/30">
              <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[16px] text-[#dbeafe] mb-1">
                📹 Último vídeo:
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-white">
                "Como fazer uma redação nota 1000 no ENEM"
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com/live/Rxj6QHEXTE4?si=1EakwOX4mqiKa7wv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#fdc700] hover:bg-[#e5b500] transition-colors rounded-xl py-3 text-center font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e] shadow-lg"
            >
              INSCREVER-SE NO CANAL
            </a>
          </div>

          {/* Card 2 - Instagram */}
          <div className="bg-[#1c398e] rounded-2xl overflow-hidden shadow-2xl p-5 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#fdc700] rounded-xl p-3 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[24px] text-white mb-1">
                  Instagram
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[18px] text-[#fdc700]">
                  @geracaomil
                </p>
              </div>
            </div>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white mb-3">
              Dicas diárias, histórias de aprovação e bastidores das aulas
            </p>
            
            <div className="bg-[#193cb8] rounded-lg p-3 mb-4 border border-[#fdc700]/30">
              <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[16px] text-[#dbeafe] mb-1">
                ✨ Novidade:
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-white">
                Stories diários com resumos de conteúdo
              </p>
            </div>
            
            <a 
              href="https://instagram.com/geracaomil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#fdc700] hover:bg-[#e5b500] transition-colors rounded-xl py-3 text-center font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e] shadow-lg"
            >
              SEGUIR NO INSTAGRAM
            </a>
          </div>

          {/* Card 3 - Podcast */}
          <div className="bg-[#1c398e] rounded-2xl overflow-hidden shadow-2xl p-5 border-2 border-[#fdc700]/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#fdc700] rounded-xl p-3 shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4C9 2.34315 10.3431 1 12 1Z" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19V23" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 23H16" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[24px] text-white mb-1">
                  Podcast
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[18px] text-[#fdc700]">
                  @podcastgeracaomil
                </p>
              </div>
            </div>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white mb-3">
              Conversas inspiradoras com aprovados e especialistas em educação
            </p>
            
            <div className="bg-[#193cb8] rounded-lg p-3 mb-4 border border-[#fdc700]/30">
              <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[16px] text-[#dbeafe] mb-1">
                🎧 Destaque:
              </p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-white">
                Episódios semanais sobre vestibulares
              </p>
            </div>
            
            <a 
              href="https://www.instagram.com/podcastgeracaomil?igsh=eHNuYzhvZ3BuNDM1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-[#fdc700] hover:bg-[#e5b500] transition-colors rounded-xl py-3 text-center font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e] shadow-lg"
            >
              OUVIR O PODCAST
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}