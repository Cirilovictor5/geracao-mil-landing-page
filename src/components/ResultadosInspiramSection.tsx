import imgMascoteFormado from "figma:asset/a2680e5e5754e95cb1de24f7740c9d033e106b78.png";
import imgJeaneVitoria from "figma:asset/09f350ca1379106148369e110a83d841ef0f2aa7.png";
import imgAnaClara from "figma:asset/a7a278de5c5ff614522c4e7abc7c71ded449559e.png";
import imgHernandes from "figma:asset/27df5141547b0a43b8197ad1c078592512fc2131.png";
import imgJulianaAzevedo from "figma:asset/768f69dc56d7a41dfd9d86f3c7cc9ab35d811968.png";
import imgMeilinePoliane from "figma:asset/f84637d6809fbc3be49b0943d6161b499362a0c5.png";
import imgHeitorAbdala from "figma:asset/045c0e3d0671e2ed66ee6740dcb5bb0d9b44444d.png";
import imgGiseleAlice from "figma:asset/86d3e4a3c384d448ac5295f7ca609370aaad512a.png";
import imgGuilhermeBarbosa from "figma:asset/1d9c4a7844eaac02427425d6dfb8ea25e91ccc0e.png";
import imgGustavo from "figma:asset/2fb7631ed1158a48071e3fa1adf465b28342a046.png";

export default function ResultadosInspiramSection() {
  const alunos = [
    { nome: 'Jeane Vitória', nota: '940', imagem: imgJeaneVitoria },
    { nome: 'Ana Clara', nota: '960', imagem: imgAnaClara },
    { nome: 'Hernandes', nota: '940', imagem: imgHernandes },
    { nome: 'Juliana Azevedo', nota: '920', imagem: imgJulianaAzevedo },
    { nome: 'Meiline Poliane', nota: '920', imagem: imgMeilinePoliane },
    { nome: 'Heitor Abdala', nota: '920', imagem: imgHeitorAbdala },
    { nome: 'Gisele Alice', nota: '900', imagem: imgGiseleAlice },
    { nome: 'Guilherme Barbosa', nota: '920', imagem: imgGuilhermeBarbosa },
    { nome: 'Gustavo', nota: '900', imagem: imgGustavo }
  ];

  const handleScrollToPlanos = () => {
    const element = document.getElementById('passo-a-passo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="block md:hidden w-full py-10 px-4 bg-white relative overflow-hidden"
      data-name="ResultadosInspiramSection"
    >
      <div className="max-w-[375px] mx-auto relative">
        {/* Título */}
        <div className="mb-6 relative z-20">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[28px] leading-[36px] text-[#1c398e] text-center mb-3">
            Resultados que <span className="text-[#fdc700]">Inspiram</span>
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[20px] text-[#4a5565] text-center px-2">
            Conheça alguns dos nossos alunos que alcançaram excelentes notas e realizaram seus sonhos com o Geração MIL
          </p>
        </div>

        {/* Grid de Alunos - 2 colunas (primeiros 8 alunos) */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {alunos.slice(0, 8).map((aluno, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img 
                src={aluno.imagem} 
                alt={`${aluno.nome} - Nota ${aluno.nota} em Redação`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Última linha: Gustavo + Mascote */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Gustavo */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src={imgGustavo} 
              alt="Gustavo - Nota 900 em Redação"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Mascote Formado ao lado do Gustavo */}
          <div className="flex items-center justify-center">
            <div className="animate-bounce" style={{ animationDuration: '3s' }}>
              <img 
                src={imgMascoteFormado} 
                alt="Mascote Geração MIL Formado" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-[#1c398e] text-center">
            Você também pode ser o próximo!
          </p>
          <button
            onClick={handleScrollToPlanos}
            className="bg-[#fdc700] px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-[#e6b600] hover:scale-105 transition-all active:scale-95 w-full max-w-[280px]"
            data-conversion-id="btn-quero-fazer-parte-mobile"
          >
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-[#1c398e] text-center">
              QUERO FAZER PARTE DESSA HISTÓRIA
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}