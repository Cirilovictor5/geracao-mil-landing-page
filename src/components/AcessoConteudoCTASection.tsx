export default function AcessoConteudoCTASection() {
  const scrollToPlanos = () => {
    const planosSection = document.getElementById('planos');
    if (planosSection) {
      planosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="block md:hidden w-full py-12 px-4 relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(139.696deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}
      data-name="AcessoConteudoCTASection"
    >
      <div className="max-w-[375px] mx-auto text-center">
        {/* Ícone decorativo */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#fdc700] rounded-full p-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Título */}
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[40px] text-white mb-4">
          Tenha acesso a<br />todo esse conteúdo
        </h2>

        {/* Subtítulo */}
        <p className="font-['Arimo:Regular',sans-serif] text-[16px] leading-[24px] text-[#dbeafe] mb-8 px-4">
          Escolha o plano ideal para você e comece a estudar hoje mesmo
        </p>

        {/* Features rápidas */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#1C398E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white text-left">
              Acesso imediato após a matrícula
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#1C398E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white text-left">
              Suporte pedagógico completo
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="bg-[#fdc700] rounded-lg p-2 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#1C398E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white text-left">
              Materiais atualizados constantemente
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToPlanos}
          className="w-full bg-[#fdc700] hover:bg-[#e5b500] transition-colors rounded-xl py-4 font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-[#1c398e] shadow-lg"
        >
          VER PLANOS E PREÇOS
        </button>

        {/* Garantia */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#FDC700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#dbeafe]">
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
}
