import { Instagram, Youtube, MessageCircle, Music } from 'lucide-react';

export default function ContatoMobile() {
  const canais = [
    {
      nome: 'Instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/geracaomil?igsh=eGR3b29uNWp3YnVk',
      cor: 'bg-gradient-to-br from-purple-600 to-pink-500'
    },
    {
      nome: 'YouTube',
      icon: Youtube,
      link: 'https://www.youtube.com/live/Rxj6QHEXTE4?si=1EakwOX4mqiKa7wv',
      cor: 'bg-gradient-to-br from-red-600 to-red-500'
    },
    {
      nome: 'Podcast',
      icon: Music,
      link: 'https://www.instagram.com/podcastgeracaomil?igsh=eHNuYzhvZ3BuNDM1',
      cor: 'bg-gradient-to-br from-purple-700 to-purple-500'
    },
    {
      nome: 'WhatsApp',
      icon: MessageCircle,
      link: 'https://wa.me/message/F2DEX6QPKWSAB1',
      cor: 'bg-gradient-to-br from-green-600 to-green-500'
    }
  ];

  return (
    <section 
      className="block md:hidden w-full py-6 px-4"
      data-name="ContatoMobile"
      style={{ 
        background: 'linear-gradient(146.797deg, rgb(28, 57, 142) 0%, rgb(25, 60, 184) 100%)'
      }}
    >
      <div className="max-w-[375px] mx-auto">
        {/* Título Compacto */}
        <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] leading-[24px] text-white text-center mb-4">
          Fale Conosco
        </h3>

        {/* Grid de Ícones 2x2 */}
        <div className="grid grid-cols-2 gap-3">
          {canais.map((canal, index) => {
            const Icon = canal.icon;
            return (
              <a
                key={index}
                href={canal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 bg-white/90 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                {/* Ícone Compacto */}
                <div 
                  className={`w-10 h-10 rounded-full ${canal.cor} flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>

                {/* Nome do Canal */}
                <span className="font-['Arimo:SemiBold',sans-serif] font-semibold text-[13px] leading-[16px] text-[#364153] text-center">
                  {canal.nome}
                </span>
              </a>
            );
          })}
        </div>
        
        {/* Texto Opcional */}
        <p className="text-center text-white/80 text-[12px] mt-3 font-['Arimo:Regular',sans-serif]">
          Estamos aqui para ajudar você!
        </p>
      </div>
    </section>
  );
}