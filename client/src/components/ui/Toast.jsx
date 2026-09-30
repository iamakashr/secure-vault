import { Check } from "lucide-react";

const Toast = ({ message }) => {
  return (
    // Changed positioning utilities from bottom-center to fixed top-right (top-6 right-6)
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-good/30 bg-surface px-5 py-3 shadow-lg">
      <Check className="h-4 w-4 text-good" />

      <span className="text-sm font-medium text-text">{message}</span>
    </div>
  );
};

export default Toast;
