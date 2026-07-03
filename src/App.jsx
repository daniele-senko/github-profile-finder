import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Background from "./components/layout/Background";
import SearchBar from "./components/ui/SearchBar";
import UserCard from "./components/UserCard";
import ErrorMessage from "./components/ErrorMessage";
import githubLogo from "./assets/images/github-logo.png";

function App() {
  // gerenciamento de estado da aplicação
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    // reseta os estados antes de iniciar uma nova busca para limpar a tela e evitar sobreposição de dados antigos
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      // validação de erros HTTP antes de tentar converter a resposta
      if (!response.ok) {
        // tratamento específico para o erro 404 (usuário não encontrado na API do GitHub)
        if (response.status === 404) {
          throw new Error(
            "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente",
          );
        }
        // fallback genérico para outros erros da API
        throw new Error("Erro ao buscar perfil. Tente novamente.");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#1F1F1F] overflow-hidden flex items-center justify-center">
      <Background />
      <div className="relative w-[1157px] max-w-[95vw] h-[537px] bg-black shadow-2xl flex flex-col items-center pt-[48px] px-4">
        {/* cabeçalho da interface principal */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-white w-[58px] h-[58px]" />
          <span className="font-nunito font-semibold text-6xl text-white">
            Perfil
          </span>
          <img src={githubLogo} alt="GitHub" className="h-[45px] w-auto" />
        </div>

        {/* input de busca que recebe a função de requisição HTTP via props */}
        <div className="mt-[18px]">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* feedback visual ativado somente durante o trânsito da requisição */}
        {loading && (
          <div className="mt-[33px] text-white font-nunito text-lg">
            Carregando...
          </div>
        )}

        {/* renderização condicional segura: a checagem '!loading' impede que o erro pisque na tela durante uma nova busca */}
        {error && !loading && (
          <div className="mt-[33px]">
            <ErrorMessage message={error} />
          </div>
        )}

        {/* renderização condicional segura: exibe o componente final apenas se os dados existirem e a requisição tiver terminado */}
        {user && !loading && (
          <div className="mt-[33px]">
            <UserCard user={user} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
