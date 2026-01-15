export default function ResultadosSection() {
  return (
    <section 
      className="block md:hidden w-full bg-gradient-to-br from-[#1c398e] to-[#193cb8] py-12 px-6"
      data-name="ResultadosSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título */}
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#fdc700] text-center mb-6">
          Resultados que falam por si
        </h2>

        {/* Lista de Resultados */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">✔️</span>
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[22px] text-white">
              Mais de <strong className="font-['Arimo:Bold',sans-serif]">1.000 alunos aprovados</strong>
            </p>
          </div>
          
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">✔️</span>
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[22px] text-white">
              Estudantes de <strong className="font-['Arimo:Bold',sans-serif]">alto padrão acadêmico</strong>
            </p>
          </div>
          
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">✔️</span>
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[22px] text-white">
              Aprovações em <strong className="font-['Arimo:Bold',sans-serif]">universidades e concursos</strong> em todo o país
            </p>
          </div>
          
          <div className="flex gap-3 items-start">
            <span className="text-[18px] shrink-0">✔️</span>
            <p className="font-['Arimo:Regular',sans-serif] text-[15px] leading-[22px] text-white">
              Histórias reais de <strong className="font-['Arimo:Bold',sans-serif]">superação e conquista</strong>
            </p>
          </div>
        </div>

        {/* Citação Destacada */}
        <div 
          className="bg-[#fefce8] border-l-4 border-[#fdc700] rounded-[10px] p-5"
        >
          <p className="font-['Arimo:Italic',sans-serif] italic text-[14px] leading-[22px] text-[#364153] text-center">
            "Cada aprovação é a prova de que o método funciona, de que o acompanhamento faz diferença e de que o estudo bem direcionado abre portas reais para o futuro."
          </p>
        </div>
      </div>
    </section>
  );
}