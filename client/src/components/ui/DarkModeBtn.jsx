import { Moon } from "lucide-react";

const DarkModeBtn = () => {
  return (
    <button
      type="button"
      aria-label="Theme selector"
      className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface/80 px-5 py-3 text-sm text-text-secondary backdrop-blur-md transition-all duration-200 hover:border-primary/50 hover:text-text-primary">
      <Moon size={19} strokeWidth={1.8} />
      <span>Dark</span>
    </button>
  );
};

export default DarkModeBtn;
