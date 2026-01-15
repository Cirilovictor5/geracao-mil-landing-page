import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ConfirmacaoPagamentoHotmart() {
  const [countdown, setCountdown] = useState(3);
  const URL_CADASTRO = 'https://geracaomil.com.br/login/signup.php';

  useEffect(() => {
    // Countdown de 3 segundos
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirecionar para a página de cadastro
          window.location.href = URL_CADASTRO;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirectNow = () => {
    window.location.href = URL_CADASTRO;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c398e] via-[#193cb8] to-[#155dfc] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-center animate-fade-in">
        {/* Ícone de Sucesso */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-6 animate-bounce-slow">
            <CheckCircle className="w-20 h-20 text-green-600" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1c398e] mb-4">
          🎉 Pagamento Confirmado!
        </h1>

        {/* Subtítulo */}
        <p className="text-xl text-gray-700 mb-8">
          Bem-vindo(a) ao <span className="font-bold text-[#fdc700]">Geração MIL</span>!
        </p>

        {/* Mensagem */}
        <div className="bg-blue-50 border-2 border-[#1c398e] rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-800 mb-4">
            Seu pagamento foi processado com sucesso pela Hotmart! 🎊
          </p>
          <p className="text-base text-gray-700">
            Agora vamos criar sua conta na plataforma para você começar a estudar.
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            Redirecionando para o cadastro em...
          </p>
          <div className="text-6xl font-bold text-[#fdc700] animate-pulse">
            {countdown}
          </div>
        </div>

        {/* Botão de Redirecionamento Imediato */}
        <button
          onClick={handleRedirectNow}
          className="bg-gradient-to-r from-[#fdc700] to-[#ffdf20] hover:from-[#e5b600] hover:to-[#fdc700] text-[#1c398e] font-bold text-xl px-12 py-5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full md:w-auto"
        >
          🚀 CRIAR MINHA CONTA AGORA
        </button>

        {/* Informação adicional */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            💡 <span className="font-semibold">Dica:</span> Use o mesmo email que você usou na compra para facilitar a identificação.
          </p>
        </div>

        {/* Suporte */}
        <div className="mt-6">
          <p className="text-xs text-gray-500">
            Problemas? Entre em contato: <a href="mailto:contato@geracaomil.com.br" className="text-[#1c398e] hover:underline font-semibold">contato@geracaomil.com.br</a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}
