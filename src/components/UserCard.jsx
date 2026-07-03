export default function UserCard({ user }) {
  return (
    <div className="w-[804px] max-w-full h-[257px] bg-[#D9D9D9] border border-black rounded-[25px] flex items-center pl-[47px] pr-6 gap-2">
      {/* Foto com borda azul */}
      <img 
        src={user.avatar_url} 
        alt={user.name || user.login} 
        className="w-[220px] h-[220px] rounded-full object-cover flex-shrink-0 border-2 border-github-blue" 
      />
      <div className="flex flex-col gap-4 max-w-[448px]">
        <h2 className="font-nunito font-bold text-[20px] text-github-blue leading-tight">
          {user.name || user.login}
        </h2>
        <p className="font-nunito font-light text-[15px] text-black leading-relaxed max-h-20 overflow-hidden">
          {user.bio || 'Sem bio disponível'}
        </p>
      </div>
    </div>
  );
}