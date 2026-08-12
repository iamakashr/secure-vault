const AuthFeature = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-950/20 text-purple-500">
        {icon}
      </div>

      <div>
        <h3 className="text-[15px] font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default AuthFeature;
