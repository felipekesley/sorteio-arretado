"use client";

import { cotasAtom } from "@/store/atoms";
import { formatMoney } from "@/utils";
import { useAtom } from "jotai";
import { ArrowRight } from "lucide-react";
import { Title } from "../_shared/title";
import { Button } from "../ui/button";

type Props = {
  handleClick?: () => void;
  btnText?: string;
  btnType?: "button" | "submit";
};

export const Footer = (props: Props) => {
  const { btnText = "Prosseguir", btnType = "button", handleClick } = props;
  const [total] = useAtom(cotasAtom);

  return (
    <div className="flex justify-between items-end mt-4">
      <div>
        <span className="text-xs">Total</span>
        <Title tag="h3" fontWeight="bold" className="text-appPrimary-strong">
          {formatMoney(total.price)}
        </Title>
      </div>

      <Button
        type={btnType}
        variant="default"
        className="rounded-lg flex gap-2 items-center"
        onClick={handleClick}
      >
        {btnText}
        <ArrowRight strokeWidth={1.25} />
      </Button>
    </div>
  );
};
