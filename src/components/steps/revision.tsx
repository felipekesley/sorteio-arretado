"use client";

import { addPriceAtom, addQuantityAtom } from "@/store/actions";
import { cotasAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { ChevronLeft } from "lucide-react";
import { Title } from "../_shared/title";
import { CardAward } from "../cardAward";
import { SheetCheckout } from "../sheetCheckout";
import { useStepper } from "../stepper";
import { Checkbox } from "../ui/checkbox";

const items = [
  {
    id: crypto.randomUUID(),
    label: "+100 cotas",
    chances: "2,5 mais chances",
    quantity: 100,
    price: 15,
    oldPrice: 20,
  },
  {
    id: crypto.randomUUID(),
    label: "+500 cotas",
    chances: "12,5 mais chances",
    quantity: 500,
    price: 75,
    oldPrice: 100,
  },
  {
    id: crypto.randomUUID(),
    label: "+1000 cotas",
    chances: "25 mais chances",
    quantity: 1000,
    price: 150,
    oldPrice: 200,
  },
] as const;

export function Revision() {
  const { nextStep, prevStep } = useStepper();
  const [, addQuantity] = useAtom(addQuantityAtom);
  const [, addPrice] = useAtom(addPriceAtom);

  const handleCheckbox = (price: number, quantity: number) => {
    addQuantity(quantity);
    addPrice(price);
  };

  return (
    <>
      <div className="mt-16 mb-12">
        <Title
          tag="h3"
          fontWeight="bold"
          className="text-dark text-center relative mb-8"
        >
          <span
            className="absolute left-0 top-1 cursor-pointer"
            onClick={() => prevStep()}
          >
            <ChevronLeft />
          </span>{" "}
          Revisão dos itens
        </Title>

        <div className="p-3 bg-appText-200 rounded-lg">
          <CardAward.Root href="">
            <CardAward.Image url="/card-3.png" />
            <CardAward.Content>
              <CardAward.Title text="Titulo" />
              <CardAward.Desc text="Desc" />
              <CardAward.Footer>
                <CardAward.Date text="10/09/2024" />
                <CardAward.Cotas text="R$ 15,00" />
              </CardAward.Footer>
            </CardAward.Content>
          </CardAward.Root>
        </div>
      </div>

      <div className="p-3 bg-appText-200 rounded-lg">
        <Title tag="h5" fontWeight="bold" className="text-dark relative mb-4">
          Aumente suas chances
        </Title>

        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id} className="bg-appText-100 p-2 rounded-lg">
              <div className="flex gap-2 items-center">
                <Checkbox
                  id={item.id}
                  value={item.price}
                  onCheckedChange={(checked) => {
                    return checked
                      ? handleCheckbox(item.price, item.quantity)
                      : handleCheckbox(-item.price, -item.quantity);
                  }}
                />
                <label
                  htmlFor={item.id}
                  className="cursor-pointer text-appSecondary-500 text-lg font-bold"
                >
                  {item.label}
                  <span className="block text-xs text-appText-400 bg-appText-200 border border-appText-400 p-1 rounded-md">
                    {item.chances}
                  </span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <SheetCheckout.Root>
        <p className="text-appText-400">
          Ao selecionar Gerar pagamento, um código será gerado para o pagamento
          via PIX. Deseja prosseguir?
        </p>

        <SheetCheckout.Footer
          btnText="Gerar pagamento"
          handleClick={() => nextStep()}
        />
      </SheetCheckout.Root>
    </>
  );
}
