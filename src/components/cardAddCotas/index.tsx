"use client";

import { cn } from "@/lib/utils";
import { addQuantityAtom, removeQuantityAtom } from "@/store/actions";
import { cotasAtom } from "@/store/atoms";
import { formatMoney } from "@/utils";
import { useAtom } from "jotai";
import { Minus, Plus } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { Title } from "../_shared/title";

type BtnProps = ComponentPropsWithoutRef<"button">;

const Btn = ({ children, onClick, ...props }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-white rounded-full flex items-center justify-center w-10 h-10"
      {...props}
    >
      {children}
    </button>
  );
};

export const AddCotas = ({ className }: { className: string }) => {
  const [cotas] = useAtom(cotasAtom);
  const [, addQuantity] = useAtom(addQuantityAtom);
  const [, removeQuantity] = useAtom(removeQuantityAtom);

  const handleRemoveQuantity = (amount: number) => {
    removeQuantity(amount);
  };

  const handleAddQuantity = (amount: number) => {
    addQuantity(amount);
  };
  return (
    <div
      className={cn(
        "relative z-10 flex items-center justify-between bg-appPrimary-strong border-2 border-light rounded-lg px-4 py-5",
        className
      )}
    >
      <div className="flex gap-2">
        <Btn
          onClick={() => handleRemoveQuantity(5)}
          disabled={cotas.quantity <= 25}
        >
          <Minus strokeWidth={1.25} size={14} /> 5
        </Btn>
        <Btn
          onClick={() => handleRemoveQuantity(1)}
          disabled={cotas.quantity <= 20}
        >
          <Minus strokeWidth={1.25} />
        </Btn>
      </div>
      <div className=" flex flex-col gap-1">
        <Title tag="h2" fontWeight="bold" className="text-white text-center">
          {cotas.quantity} Cotas
        </Title>
        <p className="text-white">
          Valor unitário:{" "}
          {cotas.price > 0 ? formatMoney(cotas.quantity / cotas.price) : 0}
        </p>
      </div>
      <div className="flex gap-2">
        <Btn onClick={() => handleAddQuantity(1)}>
          <Plus strokeWidth={1.25} />
        </Btn>
        <Btn onClick={() => handleAddQuantity(5)}>
          <Plus strokeWidth={1.25} size={14} /> 5
        </Btn>
      </div>
    </div>
  );
};
