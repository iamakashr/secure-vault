import { Check } from "lucide-react";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-xl border border-good/30 bg-surface px-5 py-3 shadow-lg">
      <Check className="h-4 w-4 text-good" />

      <span className="text-sm font-medium text-text">{message}</span>
    </div>
  );
};

export default Toast;
