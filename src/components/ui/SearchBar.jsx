import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.username;
    if (input.value.trim()) {
      onSearch(input.value.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-[503px] max-w-full">
      <input
        name="username"
        type="text"
        placeholder="Digite um usuário do Github"
        className="w-full h-[62px] pl-6 pr-[72px] rounded-[10px] bg-white text-black font-nunito font-light text-xl placeholder-black outline-none ring-0 focus:outline-none focus:ring-0 focus:ring-offset-0"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 w-[62px] h-[62px] bg-github-blue border border-gray-300 rounded-[10px] flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <FiSearch className="text-white w-[25px] h-[25px]" />
      </button>
    </form>
  );
}