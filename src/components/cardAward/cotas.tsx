import { Ticket } from "lucide-react";

export const Cotas = ({ text }: { text: string }) => {
  return (
    <span className="flex items-center gap-2 bg-appText-200 text-appText-400 max-w-max py-1 px-2 rounded-xl text-sm">
      <Ticket strokeWidth={1.5} size={18} />
      {text}
    </span>
  );
};
