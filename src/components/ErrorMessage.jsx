export default function ErrorMessage({ message }) {
  return (
    <div 
      className="w-[710px] max-w-full h-[88px] bg-[#D9D9D9] rounded-[10px] flex items-center justify-center px-4"
    >
      <p className="text-red-600 font-nunito font-normal text-[20px] text-center leading-tight">
        {message || 'Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente'}
      </p>
    </div>
  );
}