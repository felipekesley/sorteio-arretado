import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export const Root = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl px-4 py-3 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
