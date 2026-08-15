const AuthCard = ({ children }) => {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface/80 px-8 py-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-9">
      {children}
    </div>
  );
};

export default AuthCard;
