import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export default function FormSubmissions() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1421e371/submissions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const result = await response.json();

      if (result.success) {
        setSubmissions(result.submissions);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Erro ao carregar submissões');
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">Erro: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[32px] text-[#1c398e]">Submissões do Formulário</h1>
            <button 
              onClick={fetchSubmissions}
              className="bg-[#fdc700] hover:bg-[#e6b600] text-[#1c398e] px-6 py-2 rounded-lg transition-colors"
            >
              Atualizar
            </button>
          </div>

          <div className="mb-4">
            <p className="text-gray-600">Total de submissões: {submissions.length}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1c398e] text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Data</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Nome Completo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Telefone</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">E-mail</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ano Cursando</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                      Nenhuma submissão encontrada
                    </td>
                  </tr>
                ) : (
                  submissions.map((submission, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {new Date(submission.submittedAt).toLocaleString('pt-BR')}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{submission.nomeCompleto}</td>
                      <td className="border border-gray-300 px-4 py-2">{submission.telefone}</td>
                      <td className="border border-gray-300 px-4 py-2">{submission.email}</td>
                      <td className="border border-gray-300 px-4 py-2">{submission.anoCursando}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h2 className="text-[18px] text-[#1c398e] mb-2">📋 Instruções</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>As submissões são armazenadas automaticamente quando os usuários preenchem o formulário</li>
              <li>Clique em "Atualizar" para ver novas submissões</li>
              <li>Os dados são salvos de forma segura no banco de dados Supabase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
