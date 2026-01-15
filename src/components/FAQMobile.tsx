import { useState, memo, useCallback } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const FAQItemMobile = memo(function FAQItemMobile({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-label={`FAQ: ${question}`}
      >
        <span className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e] pr-3">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-[#1c398e] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-0">
          <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#4a5565]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
});

export default function FAQMobile() {
  return (
    <section 
      id="faq"
      className="block md:hidden w-full py-6 px-4 bg-gradient-to-b from-white to-[#f8f9fc]"
      data-name="FAQMobile"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          <div className="bg-[#fdc700] px-4 py-1.5 rounded-full">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[12px] leading-[18px] text-[#1c398e] text-center">
              FAQ
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-2">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[26px] leading-[34px] text-[#1c398e] text-center mb-1">
            Perguntas<br />
            <span className="text-[#fdc700]">Frequentes</span>
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#4a5565] text-center px-2">
            Tire suas dúvidas sobre o curso e nossa metodologia
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-3 mb-6">
          <FAQItemMobile 
            question="Como funciona a plataforma de estudos?"
            answer="Nossa plataforma é 100% online e você tem acesso a todas as aulas ao vivo e gravadas, materiais didáticos, exercícios e simulados. Você pode estudar no seu ritmo, quando e onde quiser, com acesso ilimitado 24/7."
            defaultOpen={true}
          />
          
          <FAQItemMobile 
            question="Qual a diferença entre os planos oferecidos?"
            answer="Oferecemos planos com diferentes durações e benefícios. O plano básico inclui acesso às videoaulas e materiais. Os planos premium incluem correção de redação ilimitada, monitorias ao vivo, simulados personalizados e acompanhamento individual."
          />
          
          <FAQItemMobile 
            question="Os professores são qualificados?"
            answer="Sim! Nosso time é formado por mestres, doutores e professores com vasta experiência em preparação para vestibulares. Todos são especialistas em suas áreas e focados em aprovação."
          />
          
          <FAQItemMobile 
            question="Como funciona a correção de redação?"
            answer="Nos planos que incluem correção de redação, você pode enviar suas redações pela plataforma e recebe feedback detalhado em até 5 dias, seguindo os critérios do ENEM e principais vestibulares."
          />
          
          <FAQItemMobile 
            question="Posso tirar dúvidas com os professores?"
            answer="Sim! Oferecemos plantão de dúvidas online, fórum de discussão e, nos planos premium, monitorias ao vivo semanais onde você pode interagir diretamente com os professores."
          />
          
          <FAQItemMobile 
            question="Tem garantia de aprovação?"
            answer="Garantimos dedicação total da nossa equipe no seu preparo. Nossa taxa de aprovação é de 95%, mas o resultado depende também do seu empenho e dedicação aos estudos."
          />
          
          <FAQItemMobile 
            question="Quando terei acesso ao conteúdo após a compra?"
            answer="Após concluir sua compra, você terá acesso imediato à plataforma para criar seu cadastro. Dentro de até 48 horas após a confirmação do pagamento e realização da matrícula, você terá acesso aos slides, apostilas em PDF, simulados e cronogramas. As videoaulas gravadas (mais de 250 aulas, sendo 5 a 10 por disciplina) são disponibilizadas progressivamente: primeiras aulas imediatamente, depois 5 a 10 aulas/mês a partir de fevereiro. As aulas ao vivo começam em fevereiro de 2025."
          />
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <p className="font-['Arimo:Regular',sans-serif] text-[13px] leading-[20px] text-[#4a5565] mb-3">
            Não encontrou a resposta que procurava?
          </p>
          <a 
            href="https://wa.me/message/F2DEX6QPKWSAB1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#1c398e] hover:bg-[#15307a] text-white font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] px-6 py-3 rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}