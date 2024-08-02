"use client";

import { cotasAtom } from "@/store/atoms";
import { formatMoney } from "@/utils";
import { useAtom } from "jotai";
import Link from "next/link";
import { Title } from "../_shared/title";
import { Button } from "../ui/button";

export const SheetCheckout = () => {
  const [total] = useAtom(cotasAtom);
  return (
    <div className="w-full max-w-[475px] z-20 p-4 fixed bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-md bg-appPrimary/20">
      <div className="flex justify-between items-end w-full">
        <div>
          <span className="text-xs text-white">Total</span>
          <Title tag="h3" fontWeight="bold" className="text-white">
            {formatMoney(total.price)}
          </Title>
        </div>
        {total.price > 0 && (
          <Button asChild>
            <Link href="/checkout">Comprar agora</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
