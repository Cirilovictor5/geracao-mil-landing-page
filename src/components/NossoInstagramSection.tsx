import { ImageWithFallback } from './figma/ImageWithFallback';
import imgImage13 from "figma:asset/bdc0eca7b87c5b1e7286be565548f0f3151117e1.png";
import imgImage14 from "figma:asset/e81957cd73a9e3246a1b187a5fd906479af41530.png";
import imgImage2 from "figma:asset/f4c10635f71c472edb5d225ec6678b87624e7df5.png";
import imgImage7 from "figma:asset/be88deb5954ad65cc1305ee21c61d0d9f0b6706b.png";
import imgImage6 from "figma:asset/2e9fd477ea8fe91b5fc719f89d3ec2e9518cc30a.png";
import imgImage5 from "figma:asset/56d301afe25790a07bfe8ee4f94d94e9ed8a9f34.png";
import imgImage11 from "figma:asset/3ea84ca3b0f8cf51bd691720b23aca69cfafd621.png";
import imgImage12 from "figma:asset/12a681055ec06f8094f71d8580d925e33e41ad19.png";
import imgImage8 from "figma:asset/60153e5af74bc9cca3c3e4778114f5248679ef84.png";
import imgImage10 from "figma:asset/468b357d39097b89e7b51a3ddd78b007e0dc4dde.png";
import imgImage4 from "figma:asset/c83709c76ee3ba5618c05f3e2d2635a41b553e2c.png";

export default function NossoInstagramSection() {
  const instagramImages = [
    { src: imgImage13, alt: "Estudantes em sala de aula" },
    { src: imgImage14, alt: "Professor em aulão presencial" },
    { src: imgImage2, alt: "Participação em podcast" },
    { src: imgImage7, alt: "Estudantes celebrando conquistas" },
    { src: imgImage6, alt: "Grupo de estudo" },
    { src: imgImage5, alt: "Evento educacional" },
    { src: imgImage11, alt: "Momento educacional" },
    { src: imgImage12, alt: "Estudantes em ação" },
    { src: imgImage8, alt: "Momento em sala de aula" },
    { src: imgImage10, alt: "Atividade educacional" },
    { src: imgImage4, alt: "Celebração e conquistas" },
  ];

  return (
    <section 
      className="block md:hidden w-full py-10 px-4 bg-white relative overflow-hidden"
      data-name="NossoInstagramSection"
    >
      <div className="max-w-[375px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] px-6 py-2 rounded-full">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] leading-[20px] text-white text-center">
              SIGA-NOS
            </p>
          </div>
        </div>

        {/* Título */}
        <div className="mb-3">
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] leading-[40px] text-[#1c398e] text-center mb-3">
            Nosso<br />Instagram
          </h2>
        </div>

        {/* Categorias com emojis */}
        <div className="mb-6">
          <p className="font-['Arimo:Regular',sans-serif] text-[14px] leading-[22px] text-[#364153] text-center px-2">
            📸 Aulões presenciais • 🎙️ Participações em podcasts • 👨‍🎓 Momentos em sala • 🎉 Eventos e conquistas
          </p>
        </div>

        {/* Indicador de arrastar */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#1c398e] to-transparent"></div>
          <p className="font-['Arimo:Regular',sans-serif] text-[12px] text-[#1c398e]">
            Arraste para o lado →
          </p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#1c398e] to-transparent"></div>
        </div>

        {/* Container com Scroll Horizontal - 4 Fotos */}
        <div className="relative mb-6">
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory pb-2">
            <div className="flex gap-3 px-1" style={{ width: 'max-content' }}>
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[160px] flex-shrink-0 snap-start cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Barra de scroll visual */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-3">
            <div 
              className="h-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-full"
              style={{ width: '40%' }}
            ></div>
          </div>
        </div>

        {/* Stats do Instagram */}
        <div className="grid grid-cols-3 gap-4 mb-6 px-4">
          <div className="text-center">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#1c398e]">
              25k+
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#364153]">
              Seguidores
            </p>
          </div>
          <div className="text-center">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#1c398e]">
              1000+
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#364153]">
              Posts
            </p>
          </div>
          <div className="text-center">
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-[24px] leading-[32px] text-[#1c398e]">
              Diário
            </p>
            <p className="font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#364153]">
              Conteúdo
            </p>
          </div>
        </div>

        {/* CTA Button para Instagram */}
        <a
          href="https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 transition-opacity rounded-xl py-4 font-['Arimo:Bold',sans-serif] font-bold text-[16px] leading-[24px] text-white text-center shadow-lg"
        >
          <div className="flex items-center justify-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            SEGUIR @GERACAOMIL
          </div>
        </a>

        {/* Texto incentivo */}
        <p className="mt-4 text-center font-['Arimo:Regular',sans-serif] text-[12px] leading-[18px] text-[#364153]">
          Acompanhe nosso dia a dia e fique por dentro de todas as novidades
        </p>
      </div>
    </section>
  );
}