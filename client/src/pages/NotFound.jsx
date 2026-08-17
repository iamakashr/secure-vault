import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 font-sans text-text-primary antialiased">
      <div className="w-full max-w-lg rounded-2xl border border-border-subtle bg-surface p-10 text-center shadow-xl shadow-black/20">
        {/* ICON */}
        <div className="mx-auto flex h-17 w-17 items-center justify-center rounded-2xl border border-primary/50 bg-primary/10 text-primary">
          <ShieldAlert size={32} strokeWidth={1.8} />
        </div>

        {/* 404 */}
        <p className="mt-6 text-sm font-semibold tracking-widest text-primary">
          ERROR 404
        </p>

        {/* HEADING */}
        <h1 className="mt-2 text-[32px] font-bold tracking-tight text-text-primary">
          Page not found
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-6 text-text-secondary">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* BACK BUTTON */}
        <Link
          to="/welcome"
          className="mx-auto mt-7 flex h-11 w-fit items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary active:scale-[0.98]">
          <ArrowLeft size={17} strokeWidth={1.8} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
