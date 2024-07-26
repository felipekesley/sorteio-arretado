import { Star } from "lucide-react";

export const Badge = () => {
  return (
    <span className="flex gap-2 items-center w-32 bg-appPrimary text-white px-1 py-1 rounded-lg text-sm absolute -top-4 left-1/2 -translate-x-1/2">
      <Star strokeWidth={1.25} />
      Mais Vendida
    </span>
  );
};
