"use client";

import { cn } from "@/lib/utils";
import { setCotaAtom } from "@/store/actions";
import { useAtom } from "jotai";

type Props = {
  children: React.ReactNode;
  className: string;
  quantity: number;
  price: number;
};

export const Root = ({ children, className, quantity, price }: Props) => {
  const [, setCota] = useAtom(setCotaAtom);

  return (
    <div
      onClick={() => setCota(quantity, price)}
      className={cn(
        "relative bg-white border border-appPrimary-100 rounded-lg px-3 py-4 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
