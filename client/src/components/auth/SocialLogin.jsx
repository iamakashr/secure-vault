const SocialLogin = () => {
  return (
    <>
      {/* Divider */}
      <div className="my-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-800" />

        <span className="whitespace-nowrap text-xs text-slate-400">
          or continue with
        </span>

        <div className="h-px flex-1 bg-slate-800" />
      </div>

      {/* Google */}
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-4 rounded-lg border border-slate-700/70 bg-[#10162a]/70 text-[15px] font-medium text-slate-100 transition hover:bg-[#151c32]">
        <span className="text-lg font-bold text-white">G</span>

        <span>Continue with Google</span>
      </button>
    </>
  );
};

export default SocialLogin;
