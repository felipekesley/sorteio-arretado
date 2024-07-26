import { Title } from "../_shared/title";

export const Quantity = ({ quantity }: { quantity: number }) => {
  return (
    <Title
      tag="h4"
      fontWeight="bold"
      className="text-appPrimary-strong text-center"
    >
      {quantity} Cotas
    </Title>
  );
};
