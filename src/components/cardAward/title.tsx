import { Title } from "@/components/_shared/title";

export const TitleCard = ({ text }: { text: string }) => {
  return (
    <Title tag="h4" fontWeight="bold" className="text-appText-600">
      {text}
    </Title>
  );
};
