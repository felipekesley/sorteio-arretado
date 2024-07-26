"use client";

import { cn } from "@/lib/utils";
import { setQuantityAtom } from "@/store/actions";
import { useAtom } from "jotai";

type Props = {
  children: React.ReactNode;
  className: string;
  quantity: number;
};

export const Root = ({ children, className, quantity }: Props) => {
  const [, setQuantity] = useAtom(setQuantityAtom);

  return (
    <div
      onClick={() => setQuantity(quantity)}
      className={cn(
        "relative bg-white border border-appPrimary-100 rounded-lg px-3 py-4 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
