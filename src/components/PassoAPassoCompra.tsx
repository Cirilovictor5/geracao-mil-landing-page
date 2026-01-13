import imgMascoteOculos from "figma:asset/8415e0d1fba0c023fd8a888f265ee2008b79a891.png";

export default function PassoAPassoCompra() {
  return (
    <div id="passo-a-passo" className="w-full bg-gradient-to-b from-white to-gray-50 py-24 px-4 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Título da Seção */}
        <div className="text-center mb-16 relative">
          {/* Mascote com Óculos - Decorativo no Título */}
          <div className="absolute left-[10%] top-[-60px] z-10 pointer-events-none hidden lg:block" style={{ animation: 'float 3.5s ease-in-out infinite' }}>
            <img 
              src={imgMascoteOculos}
              alt="Mascote Geração MIL" 
              className="w-[180px] h-auto object-contain drop-shadow-2xl opacity-90 bg-transparent"
              style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
            />
          </div>

          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[48px] text-[#1c398e] leading-tight mb-4">
            Como funciona a <span className="text-[#fdc700]">compra?</span>
          </h2>
          <p className="font-['Arimo:Regular',sans-serif] text-[20px] text-[#4a5565] leading-relaxed max-w-[900px] mx-auto">
            Siga este passo a passo simples para garantir sua vaga e começar a estudar
          </p>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Passo 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:scale-105">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[#fdc700] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#fdc700] to-[#ffdf20] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] text-[#1c398e]">1</p>
                </div>
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#1c398e] leading-tight pt-3">
                  Clique em "Garantir a Minha Vaga"
                </h3>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[17px] text-[#4a5565] leading-relaxed">
                Escolha o botão amarelo <span className="font-bold text-[#fdc700]">"🎓 GARANTIR MINHA VAGA AGORA"</span> localizado na landing page. Este é o primeiro passo para iniciar sua jornada rumo à aprovação!
              </p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:scale-105">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[#1c398e] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#1c398e] to-[#193cb8] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] text-[#fdc700]">2</p>
                </div>
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#1c398e] leading-tight pt-3">
                  Escolha seu Plano
                </h3>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[17px] text-[#4a5565] leading-relaxed">
                Selecione entre o <span className="font-bold text-[#1c398e]">Plano Básico</span> (Redação + Matemática - R$ 89,90/mês) ou o <span className="font-bold text-[#1c398e]">Plano Completo</span> (Todas as disciplinas - R$ 129,90/mês) de acordo com suas necessidades.
              </p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:scale-105">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[#fdc700] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#fdc700] to-[#ffdf20] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] text-[#1c398e]">3</p>
                </div>
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#1c398e] leading-tight pt-3">
                  Preencha os Dados e Pague
                </h3>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[17px] text-[#4a5565] leading-relaxed">
                Você será redirecionado para a página segura da <span className="font-bold text-[#1c398e]">Hotmart</span>. Preencha seus dados e escolha a forma de pagamento (PIX, Cartão ou Boleto). Processo rápido e 100% seguro! 🔒
              </p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:scale-105">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[#1c398e] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#1c398e] to-[#193cb8] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] text-[#fdc700]">4</p>
                </div>
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#1c398e] leading-tight pt-3">
                  Clique em "Continuar Navegando"
                </h3>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[17px] text-[#4a5565] leading-relaxed">
                Após a confirmação do pagamento, você verá uma mensagem de sucesso. Clique no botão <span className="font-bold text-[#fdc700]">"Continuar Navegando"</span> para ser direcionado automaticamente para a plataforma.
              </p>
            </div>
          </div>

          {/* Passo 5 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:scale-105">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[#fdc700] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#fdc700] to-[#ffdf20] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] text-[#1c398e]">5</p>
                </div>
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#1c398e] leading-tight pt-3">
                  Crie sua Conta na Plataforma
                </h3>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[17px] text-[#4a5565] leading-relaxed">
                Na plataforma Geração MIL, preencha o formulário de cadastro com seus dados pessoais e crie sua senha de acesso. Use o mesmo e-mail da compra para facilitar a identificação! 📧
              </p>
            </div>
          </div>

          {/* Passo 6 */}
          <div className="bg-gradient-to-br from-[#1c398e] to-[#193cb8] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group hover:scale-105">
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] bg-[#fdc700] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#fdc700] to-[#ffdf20] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[32px] text-[#1c398e]">6</p>
                </div>
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#fdc700] leading-tight pt-3">
                  Aguarde até 48 Horas
                </h3>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[17px] text-white leading-relaxed">
                Após criar sua conta, você terá acesso imediato à plataforma. Dentro de <span className="font-bold text-[#fdc700]">até 48 horas</span>, você será matriculado automaticamente nas disciplinas do seu plano e poderá começar a estudar! 🎓✨
              </p>
            </div>
          </div>

        </div>

        {/* Banner de Destaque */}
        <div className="max-w-[1100px] mx-auto mt-16">
          <div className="bg-gradient-to-r from-[#fdc700] to-[#ffdf20] rounded-3xl shadow-2xl p-12 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white rounded-full opacity-10 transform translate-x-[80px] translate-y-[-80px]"></div>
            <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-white rounded-full opacity-10 transform translate-x-[-60px] translate-y-[60px]"></div>
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <a 
                  href="#planos"
                  id="btn-ver-planos-passo-a-passo"
                  data-track="click-navigation"
                  data-destination="planos"
                  data-section="passo-a-passo"
                  className="inline-block font-['Arimo:Bold',sans-serif] font-bold text-[40px] text-[#1c398e] leading-tight hover:text-[#2d4ba8] transition-colors duration-300 cursor-pointer underline decoration-2 underline-offset-8 hover:underline-offset-4"
                >
                  🎉 É muito simples e rápido!
                </a>
              </div>
              <p className="font-['Arimo:Regular',sans-serif] text-[22px] text-[#1c398e] leading-relaxed max-w-[900px] mx-auto">
                Todo o processo leva menos de <span className="font-bold">5 minutos</span> e em até 48 horas você já estará estudando para conquistar a nota MIL no ENEM! 🚀
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}