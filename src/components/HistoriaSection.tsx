export default function HistoriaSection() {
  return (
    <section 
      className="block md:hidden w-full bg-white py-8 px-4"
      data-name="HistoriaSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-6">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#1c398e] mb-2">
            Entenda a nossa
          </h2>
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#fdc700]">
            história
          </h2>
        </div>

        {/* Conteúdo Principal em Caixa Cinza */}
        <div className="bg-[#f9fafb] rounded-[16px] p-5 mb-4 shadow-sm">
          {/* Parágrafos */}
          <div className="space-y-3 mb-5">
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[24px] text-[#1c398e] text-justify">
              Tudo começou na cidade de <strong className="font-['Arimo:Bold',sans-serif]">Madre de Deus-BA</strong>, em um cenário desafiador, marcado por desigualdades educacionais e limitações estruturais. Diante disso, o Geração Mil apostou no ensino a distância como ferramenta de alcance e inclusão.
            </p>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[24px] text-[#1c398e] text-justify">
              O crescimento foi rápido e consistente. As primeiras turmas, voltadas para redação, logo se expandiram para grandes aulões e cursos completos, alcançando <strong className="font-['Arimo:Bold',sans-serif]">Piauí, São Sebastião do Passé, Candeias, Aracaju e São Francisco do Conde.</strong>
            </p>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[24px] text-[#1c398e] text-justify">
              Atualmente, o Geração Mil oferece preparação completa para os principais vestibulares do país — com destaque para o <strong className="font-['Arimo:Bold',sans-serif]">ENEM</strong> — além de cursos para concursos públicos.
            </p>
          </div>

          {/* Card Branco Container - Para criar contraste */}
          <div className="bg-white rounded-[16px] p-3 mb-4 shadow-md">
            {/* Título da Caixa */}
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] mb-3 text-center">
              Resultados que falam por si
            </h3>
            
            {/* 4 Mini-Cards Brancos com Bordas Azuis */}
            <div className="space-y-2">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-3 border-2 border-[#1c398e] shadow-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-[18px] shrink-0">✔️</span>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                    Mais de 1.000 alunos aprovados
                  </p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-xl p-3 border-2 border-[#1c398e] shadow-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-[18px] shrink-0">✔️</span>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                    Estudantes de alto padrão acadêmico
                  </p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl p-3 border-2 border-[#1c398e] shadow-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-[18px] shrink-0">✔️</span>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                    Aprovações em universidades e concursos em todo o país
                  </p>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white rounded-xl p-3 border-2 border-[#1c398e] shadow-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-[18px] shrink-0">✔️</span>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                    Histórias reais de superação, crescimento e conquista
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Citação Destacada */}
          <div 
            className="bg-[#fefce8] border-l-4 border-[#fdc700] rounded-[12px] p-4 shadow-sm"
          >
            <p className="font-['Arimo:Italic',sans-serif] italic text-[14px] leading-[22px] text-[#1c398e] text-center">
              "Cada aprovação prova que o método funciona e o acompanhamento faz diferença. O estudo bem direcionado abre portas reais."
            </p>
          </div>
        </div>

        {/* Cards de Métricas - 3 colunas compactas */}
        <div className="grid grid-cols-3 gap-3">
          {/* Card 1 - Alunos Aprovados */}
          <div 
            className="rounded-[12px] p-4 text-center shadow-md"
            style={{ backgroundImage: "linear-gradient(166.038deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white mb-1">
              +1.000
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-white">
              Alunos aprovados
            </p>
          </div>

          {/* Card 2 - Atuação Nacional */}
          <div 
            className="rounded-[12px] p-4 text-center shadow-md"
            style={{ backgroundImage: "linear-gradient(166.038deg, rgb(253, 199, 0) 0%, rgb(255, 223, 32) 100%)" }}
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-[#1c398e] mb-1">
              Nacional
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-[#1c398e]">
              Atuação em todo Brasil
            </p>
          </div>

          {/* Card 3 - Excelência */}
          <div 
            className="rounded-[12px] p-4 text-center shadow-md"
            style={{ backgroundImage: "linear-gradient(166.038deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] leading-[28px] text-white mb-1">
              Excelência
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[11px] leading-[16px] text-white">
              Educação de qualidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}