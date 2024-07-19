import { Title } from "@/components/_shared/title";

export const TitleCard = ({ text }: { text: string }) => {
  return (
    <Title tag="h3" fontWeight="bold" className="text-white">
      {text}
    </Title>
  );
};
