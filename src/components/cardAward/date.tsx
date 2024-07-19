import { Clock8 } from "lucide-react";

export const DateCard = ({ text }: { text: string }) => {
  return (
    <span className="flex items-center gap-2 bg-appWarning-100 text-appWarning-400 max-w-max py-1 px-2 rounded-xl text-sm">
      <Clock8 strokeWidth={1.5} size={18} />
      {text}
    </span>
  );
};
