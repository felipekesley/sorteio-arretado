import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export const Root = (props: Props) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "max-w-[475px] z-20 bg-appText-200 p-4 fixed bottom-0 left-1/2 -translate-x-1/2",
        className
      )}
    >
      {children}
    </div>
  );
};
