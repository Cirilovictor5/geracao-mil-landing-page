export default function HistoriaSection() {
  return (
    <section 
      className="hidden max-md:block w-full bg-white py-6 px-6"
      data-name="HistoriaSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-4">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[30px] text-[#1c398e] mb-1">
            Entenda a nossa
          </h2>
          <div className="inline-block relative">
            <h2 
              className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[30px] text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(134.363deg, rgb(253, 199, 0) 0%, rgb(255, 223, 32) 100%)" }}
            >
              história
            </h2>
          </div>
        </div>

        {/* Conteúdo Principal em Caixa Cinza */}
        <div className="bg-[#f9fafb] rounded-[16px] p-4 mb-4">
          {/* Parágrafos */}
          <div className="space-y-2 mb-4">
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[22px] text-[#364153] text-justify">
              Tudo começou na cidade de <strong className="font-['Arimo:Bold',sans-serif]">Madre de Deus-BA</strong>, em um cenário desafiador, marcado por desigualdades educacionais e limitações estruturais. Diante disso, o Geração Mil apostou no ensino a distância como ferramenta de alcance e inclusão.
            </p>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[22px] text-[#364153] text-justify">
              O crescimento foi rápido e consistente. As primeiras turmas, voltadas para redação, logo se expandiram para grandes aulões e cursos completos, alcançando <strong className="font-['Arimo:Bold',sans-serif]">Piauí, São Sebastião do Passé, Candeias, Aracaju e São Francisco do Conde.</strong>
            </p>
            
            <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[22px] text-[#364153] text-justify">
              Atualmente, o Geração Mil oferece preparação completa para os principais vestibulares do país — com destaque para o <strong className="font-['Arimo:Bold',sans-serif]">ENEM</strong> — além de cursos para concursos públicos.
            </p>
          </div>

          {/* Card Azul - Resultados */}
          <div 
            className="bg-[#1c398e] rounded-[12px] p-3 mb-3"
          >
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[22px] text-[#fdc700] mb-2">
              Resultados que falam por si
            </h3>
            
            <div className="space-y-1.5">
              <div className="flex gap-2 items-start">
                <span className="text-[13px] shrink-0">✔️</span>
                <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[17px] text-white">
                  Mais de 1.000 alunos aprovados
                </p>
              </div>
              
              <div className="flex gap-2 items-start">
                <span className="text-[13px] shrink-0">✔️</span>
                <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[17px] text-white">
                  Estudantes de alto padrão acadêmico
                </p>
              </div>
              
              <div className="flex gap-2 items-start">
                <span className="text-[13px] shrink-0">✔️</span>
                <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[17px] text-white">
                  Aprovações em universidades e concursos em todo o país
                </p>
              </div>
              
              <div className="flex gap-2 items-start">
                <span className="text-[13px] shrink-0">✔️</span>
                <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[17px] text-white">
                  Histórias reais de superação, crescimento e conquista
                </p>
              </div>
            </div>
          </div>

          {/* Citação Destacada */}
          <div 
            className="bg-[#fefce8] border-l-4 border-[#fdc700] rounded-[10px] p-3"
          >
            <p className="font-['Arimo:Italic',sans-serif] italic text-[12px] leading-[18px] text-[#364153] text-center">
              "Cada aprovação prova que o método funciona e o acompanhamento faz diferença. O estudo bem direcionado abre portas reais."
            </p>
          </div>
        </div>

        {/* Cards de Métricas - 3 colunas compactas */}
        <div className="grid grid-cols-3 gap-2">
          {/* Card 1 - Alunos Aprovados */}
          <div 
            className="rounded-[10px] p-3 text-center"
            style={{ backgroundImage: "linear-gradient(166.038deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-0.5">
              +1.000
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#bedbff]">
              Alunos aprovados
            </p>
          </div>

          {/* Card 2 - Atuação Nacional */}
          <div 
            className="rounded-[10px] p-3 text-center"
            style={{ backgroundImage: "linear-gradient(166.038deg, rgb(253, 199, 0) 0%, rgb(255, 223, 32) 100%)" }}
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-[#1c398e] mb-0.5">
              Nacional
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#193cb8]">
              Atuação em todo Brasil
            </p>
          </div>

          {/* Card 3 - Excelência */}
          <div 
            className="rounded-[10px] p-3 text-center"
            style={{ backgroundImage: "linear-gradient(166.038deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)" }}
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[20px] leading-[26px] text-white mb-0.5">
              Excelência
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[10px] leading-[14px] text-[#bedbff]">
              Educação de qualidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}