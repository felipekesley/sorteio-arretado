"use client";

import { cotasAtom } from "@/store/atoms";
import { formatMoney } from "@/utils";
import { useAtom } from "jotai";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Title } from "../_shared/title";
import { useStepper } from "../stepper";
import { Button } from "../ui/button";

export const SheetCheckoutStep = () => {
  const router = useRouter();
  const [total] = useAtom(cotasAtom);
  const { nextStep } = useStepper();

  if (total.price === 0) router.push("/sorteio");

  return (
    <div className="max-w-[475px] z-20 bg-appText-200 p-4 fixed bottom-0 left-1/2 -translate-x-1/2">
      <p className="text-appText-400">
        Ao prosseguir você confirma ser maior de 18 anos e que está de acordo
        com os termos de uso do sorteio.
      </p>

      <div className="flex justify-between items-end mt-4">
        <div>
          <span className="text-xs">Total</span>
          <Title tag="h3" fontWeight="bold" className="text-appPrimary-strong">
            {formatMoney(total.price)}
          </Title>
        </div>

        <Button
          variant="default"
          className="rounded-lg flex gap-2 items-center"
          onClick={nextStep}
        >
          Prosseguir
          <ArrowRight strokeWidth={1.25} />
        </Button>
      </div>
    </div>
  );
};
