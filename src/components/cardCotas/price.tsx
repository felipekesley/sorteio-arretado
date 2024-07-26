import { formatMoney } from "@/utils";

interface PriceProps {
  price: number;
  oldPrice?: number | null;
}

export const Price = ({ price, oldPrice }: PriceProps) => {
  return (
    <p className="text-center block text-appPrimary-600 font-bold text-lg">
      {oldPrice != null && (
        <span className="line-through text-appText-500 mr-3">
          {formatMoney(oldPrice)}
        </span>
      )}
      {formatMoney(price)}
    </p>
  );
};
