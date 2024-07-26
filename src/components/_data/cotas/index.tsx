import { CardCotas } from "@/components/cardCotas";
import { cotas } from "@/data/cotas";
import { cn } from "@/lib/utils";

export const GetCotas = async () => {
  const data = await cotas.all();

  const styles = "bg-gradient-to-r from-appPrimary-100 to-white";
  return (
    <div className="relative z-10 grid grid-cols-2 gap-4 mt-12">
      {data?.map((item, index) => (
        <CardCotas.Root
          quantity={item.quantity}
          key={item.id}
          className={cn("col-span-1", index === 0 && styles)}
        >
          {index === 0 && <CardCotas.Badge />}
          <CardCotas.Quantity quantity={item.quantity} />
          <CardCotas.Price price={item.price} oldPrice={item.oldPrice} />
        </CardCotas.Root>
      ))}
    </div>
  );
};
