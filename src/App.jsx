import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import Background from "./components/layout/Background";
import SearchBar from "./components/ui/SearchBar";
import UserCard from "./components/UserCard";
import ErrorMessage from "./components/ErrorMessage";
import githubLogo from "./assets/images/github-logo.png";

function App() {
  // estados mockados para demonstrar a estrutura
  const [user, setUser] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "Octocat",
    login: "octocat",
    bio: "Bio de exemplo."
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    console.log("Buscando:", username);
    // aqui futuramente virá a lógica da API
  };

  return (
    <div className="relative min-h-screen bg-[#272727] overflow-hidden flex items-center justify-center">
      <Background />

      {/* Container central */}
      <div className="relative w-[1157px] max-w-[95vw] h-[537px] bg-black shadow-2xl flex flex-col items-center pt-[48px] px-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-white w-[58px] h-[58px]" />
          <span className="font-nunito font-semibold text-6xl text-white">
            Perfil
          </span>
          <img src={githubLogo} alt="GitHub" className="h-[45px] w-auto" />
        </div>

        {/* Barra de busca */}
        <div className="mt-[18px]">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-[33px] text-white font-nunito text-lg">Carregando...</div>
        )}

        {/* Erro */}
        {error && !loading && (
          <div className="mt-[33px]">
            <ErrorMessage message={error} />
          </div>
        )}

        {/* Card do perfil */}
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