const AuthCard = ({ children }) => {
  return (
    <div className="rounded-[20px] border border-slate-700/70 bg-[#080d20]/70 px-8 py-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-9">
      {children}
    </div>
  );
};

export default AuthCard;
