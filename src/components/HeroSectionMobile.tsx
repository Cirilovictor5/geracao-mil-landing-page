import imgLogoGMNovo from "figma:asset/7e66070eb25e0b43b53e33be783a9836430cfbae.png";

export default function HeroSectionMobile() {
  return (
    <div className="block md:hidden relative w-full max-w-[412px] min-h-[917px] mx-auto px-4 pt-16 pb-12 flex flex-col gap-6" data-name="HeroSectionMobile">
      {/* Badge "O MELHOR DO BRASIL" */}
      <div className="flex justify-start w-full">
        <div className="bg-[#fdc700] flex items-center justify-center px-2.5 py-1.5 rounded-full shadow-md max-w-full">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#1c398e] text-[10px] leading-[14px] whitespace-nowrap">O MELHOR DO BRASIL</p>
        </div>
      </div>
      
      {/* Títulos */}
      <div className="flex flex-col gap-2">
        <h1 className="font-['Arimo:Bold',sans-serif] font-bold text-white text-[32px] leading-[38px]">
          O curso pré-vestibular
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[#fdc700] text-[32px] leading-[38px]">
            mais completo
          </h2>
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-white text-[32px] leading-[38px]">
            do Brasil
          </h2>
        </div>
      </div>
      
      {/* Parágrafo Descritivo */}
      <p className="font-['Arimo:Regular',sans-serif] text-[#dbeafe] text-[16px] leading-[24px] text-left">
        Prepare-se para o ENEM e principais vestibulares com o melhor método de ensino do Brasil.
      </p>
      
      {/* Título do vídeo */}
      <div className="text-center mt-4">
        <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-1">
          Conheça o <span className="text-[#fdc700]">Geração MIL</span>
        </h3>
        <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[18px] text-[#dbeafe]">
          Assista e descubra nosso método
        </p>
      </div>
      
      {/* Container do vídeo */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16 / 9' }}>
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/mT09LZXloMw" 
          title="Geração MIL - Transformando sonhos em aprovações"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
      
      {/* Botão CTA Principal */}
      <button
        onClick={() => {
          const element = document.getElementById('planos');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="w-full bg-[#fdc700] text-[#1c398e] font-['Arimo:Bold',sans-serif] font-bold text-[14px] py-3 px-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 mt-2"
        data-conversion-id="btn-video-mobile-inscreva-se"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3L20 12L6 21V3Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Inscreva-se Agora
      </button>
      
      {/* FORMULÁRIO MOBILE - Card de Inscrição */}
      <div className="w-full bg-white rounded-2xl shadow-2xl p-6 mt-8 flex flex-col gap-5" data-name="FormularioMobile">
        {/* Logo GM */}
        <div className="flex justify-center">
          <div className="relative w-[120px] h-[120px] flex items-center justify-center">
            <div className="absolute w-[100px] h-[100px] bg-[#fdc700] rounded-full shadow-lg"></div>
            <img 
              src={imgLogoGMNovo}
              alt="Geração MIL - Logo GM" 
              className="relative z-10 w-[80px] h-[80px] object-contain"
            />
          </div>
        </div>
        
        {/* Título */}
        <div className="text-center">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[#1c398e] text-[28px] leading-[34px] mb-2">
            Inscreva-se agora!
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[24px]">
            Comece sua jornada rumo à aprovação
          </p>
        </div>
        
        {/* Lista de Benefícios */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[20px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#1c398e] text-[14px] leading-[20px]">
              Acesso completo à plataforma de estudos
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[20px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#1c398e] text-[14px] leading-[20px]">
              Professores especializados e experientes
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[20px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#1c398e] text-[14px] leading-[20px]">
              Material didático completo e atualizado
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[20px] bg-[#1c398e] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#fdc700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#1c398e] text-[14px] leading-[20px]">
              Suporte e acompanhamento personalizado
            </p>
          </div>
        </div>
        
        {/* Informações sobre Acesso */}
        <div className="w-full bg-gradient-to-r from-[#1c398e]/5 to-[#fdc700]/5 rounded-xl p-4 border-l-4 border-[#fdc700]">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[18px] flex-shrink-0">📅</span>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#1c398e] text-[13px] leading-[18px]">
                Aulas ao vivo começam em fevereiro
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[18px] flex-shrink-0">⚡</span>
              <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565] text-[12px] leading-[18px]">
                <strong className="font-['Arimo:Bold',sans-serif] text-[#1c398e]">+250 videoaulas gravadas</strong> (5 a 10 por disciplina) disponibilizadas progressivamente. Slides e apostilas têm acesso em até 48h
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[18px] flex-shrink-0">📚</span>
              <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565] text-[12px] leading-[18px]">
                <strong className="font-['Arimo:Bold',sans-serif] text-[#1c398e]">Acesso completo a todos os cronogramas</strong> desde a confirmação do pagamento e inscrição em curso, após 48h
              </p>
            </div>
          </div>
        </div>
        
        {/* Botão CTA do Formulário */}
        <button
          onClick={() => {
            const element = document.getElementById('planos');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-[#fdc700] py-3.5 px-4 rounded-xl shadow-lg hover:bg-[#e6b600] hover:scale-105 transition-all flex items-center justify-center"
          data-conversion-id="btn-inscricao-formulario-mobile"
        >
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#1c398e] text-[15px] text-center">
            🎓 GARANTIR MINHA VAGA AGORA
          </p>
        </button>
        
        {/* Texto Legal */}
        <p className="font-['Arimo:Regular',sans-serif] text-[#6a7282] text-[11px] leading-[16px] text-center">
          ⬇️ CONHEÇA NOSSOS PLANOS ⬇️
        </p>
      </div>
    </div>
  );
}