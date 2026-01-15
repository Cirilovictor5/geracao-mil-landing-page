import imgVictorCirilo1 from "figma:asset/3d58d1fe192f4fba3cdc226a83469bf405aba2d2.png";
import imgImageXelao from "figma:asset/9262e152d467782746339a95c23a273e3f96cfbc.png";
import imgPablitoGeracaoMil1 from "figma:asset/83b1739e3111fc716995c3a489999a5b57ab194a.png";
import imgImageWaguinho from "figma:asset/4ce791322b5a93bfebfac4a3548ebac276040909.png";
import imgImageVitao from "figma:asset/bcc531d486e489abeb7898ed73f3104cd77223e7.png";
import imgImageMatheusLordelo from "figma:asset/69e8ec2fcda126af43419ac296f5ec959b0c67c3.png";
import imgImageLuisAlberto from "figma:asset/bb033ad343aaa1c9221221de2ccc336cc495dfc9.png";
import imgImageCleslei from "figma:asset/bcc7812a29472fca7e2be878974a0110ce0ab1c6.png";
import imgImageEdnaldo from "figma:asset/c39ff5aa7f9ce08037c30889485b9ab404aedae6.png";
import imgCalhauGeracaoMilCopiar1 from "figma:asset/f316e4808aa652478fb0bbb9367e5e7287831517.png";
import imgBiaGeracaoMilCopiarPng1 from "figma:asset/3580b8f20b1b0b616f842627ddae926d8d35fc84.png";
import imgWevertonCamisaGmil1 from "figma:asset/a0e95cde4db06842ffa4bb1c27c192034429ce39.png";
import imgImageAnderson from "figma:asset/c443b77cc2914fa0cefa6170877380bf302d0d87.png";
import { memo } from "react";

const ProfessoresSection = memo(function ProfessoresSection() {
  const professores = [
    {
      nome: 'Victor Cirilo',
      disciplina: 'Redação',
      descricao: 'Especialista em redação nota 1000',
      imagem: imgVictorCirilo1
    },
    {
      nome: 'Xelão',
      disciplina: 'Geografia',
      descricao: 'Didática dinâmica e contextualizada',
      imagem: imgImageXelao
    },
    {
      nome: 'Pablo',
      disciplina: 'Filosofia e Sociologia',
      descricao: 'Pensamento crítico e reflexivo',
      imagem: imgPablitoGeracaoMil1
    },
    {
      nome: 'Waguinho',
      disciplina: 'Matemática',
      descricao: 'Matemática com foco em aprovação',
      imagem: imgImageWaguinho
    },
    {
      nome: 'Vitão',
      disciplina: 'Literatura',
      descricao: 'Literatura de forma envolvente',
      imagem: imgImageVitao
    },
    {
      nome: 'Matheus Lordelo',
      disciplina: 'Física',
      descricao: 'Física com aplicação prática',
      imagem: imgImageMatheusLordelo
    },
    {
      nome: 'Luis Alberto',
      disciplina: 'Gramática',
      descricao: 'Domínio completo da língua portuguesa',
      imagem: imgImageLuisAlberto
    },
    {
      nome: 'Cleslei',
      disciplina: 'Biologia',
      descricao: 'Biologia clara e objetiva',
      imagem: imgImageCleslei
    },
    {
      nome: 'Ednaldo',
      disciplina: 'Matemática',
      descricao: 'Resolução estratégica de problemas',
      imagem: imgImageEdnaldo
    },
    {
      nome: 'Calhau',
      disciplina: 'História',
      descricao: 'Conexões históricas relevantes',
      imagem: imgCalhauGeracaoMilCopiar1
    },
    {
      nome: 'Beatriz',
      disciplina: 'Inglês',
      descricao: 'Método eficiente e prático',
      imagem: imgBiaGeracaoMilCopiarPng1
    },
    {
      nome: 'Weverton',
      disciplina: 'Química',
      descricao: 'Química descomplicada e aplicada',
      imagem: imgWevertonCamisaGmil1
    },
    {
      nome: 'Anderson',
      disciplina: 'Química',
      descricao: 'Química com método inovador',
      imagem: imgImageAnderson
    }
  ];

  return (
    <section 
      className="block md:hidden w-full py-8 px-4"
      data-name="ProfessoresSection"
      style={{ 
        background: 'linear-gradient(146.797deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)'
      }}
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título */}
        <div className="mb-3">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-white text-center">
            Conheça nosso{' '}
            <span className="text-[#fdc700]">time de professores</span>
          </h2>
        </div>

        {/* Subtítulo */}
        <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-white/90 text-center mb-6 px-2">
          Professores de reconhecimento nacional, com didática moderna e metodologia eficiente para sua aprovação
        </p>

        {/* Grid de Professores - Scroll Horizontal */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-3" style={{ width: 'max-content' }}>
            {professores.map((professor, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0"
                style={{ width: '200px' }}
              >
                {/* Foto do Professor */}
                <div className="bg-[#f3f4f6] h-[220px] overflow-hidden">
                  <img 
                    src={professor.imagem} 
                    alt={`Professor ${professor.nome} - ${professor.disciplina}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Informações */}
                <div className="p-3 space-y-1">
                  {/* Nome */}
                  <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[20px] text-[#1c398e] text-center">
                    {professor.nome}
                  </h3>

                  {/* Disciplina */}
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[18px] text-[#d08700] text-center">
                    {professor.disciplina}
                  </p>

                  {/* Descrição */}
                  <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[16px] text-[#4a5565] text-center">
                    {professor.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de Scroll */}
        <p className="text-center text-white/60 text-[11px] mt-2 font-['Arimo:Regular',sans-serif]">
          ← Deslize para ver todos os professores →
        </p>
      </div>
    </section>
  );
});

export default ProfessoresSection;