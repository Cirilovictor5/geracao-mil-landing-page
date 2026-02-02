export default function ResultadosSection() {
  return (
    <section 
      className="block md:hidden w-full bg-white py-10 px-4"
      data-name="ResultadosSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título */}
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#1c398e] text-center mb-6">
          Resultados que falam<br />
          <span className="text-[#fdc700]">por si</span>
        </h2>

        {/* Cards com Borda Azul */}
        <div className="space-y-3 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-4 border-2 border-[#1c398e] shadow-sm">
            <div className="flex gap-3 items-start">
              <span className="text-[20px] shrink-0">✔️</span>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                Mais de 1.000<br />alunos aprovados
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-4 border-2 border-[#1c398e] shadow-sm">
            <div className="flex gap-3 items-start">
              <span className="text-[20px] shrink-0">✔️</span>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                Estudantes de alto<br />padrão acadêmico
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-xl p-4 border-2 border-[#1c398e] shadow-sm">
            <div className="flex gap-3 items-start">
              <span className="text-[20px] shrink-0">✔️</span>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                Aprovações em<br />universidades e concursos em todo<br />o país
              </p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white rounded-xl p-4 border-2 border-[#1c398e] shadow-sm">
            <div className="flex gap-3 items-start">
              <span className="text-[20px] shrink-0">✔️</span>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e]">
                Histórias reais de<br />superação, crescimento e<br />conquista
              </p>
            </div>
          </div>
        </div>

        {/* Citação Destacada */}
        <div className="bg-[#fefce8] border-l-4 border-[#fdc700] rounded-lg p-4">
          <p className="font-['Arimo:Italic',sans-serif] italic text-[13px] leading-[20px] text-[#364153] text-left">
            "Cada aprovação prova que o método funciona e o acompanhamento faz diferença. O estudo bem direcionado abre portas reais."
          </p>
        </div>
      </div>
    </section>
  );
}