import { Title } from "../_shared/title";

export const Award = ({ award }: { award: string }) => {
  return (
    <div>
      <span className="block text-center text-appText-400">Premio:</span>

      <Title
        tag="h3"
        fontWeight="bold"
        className="text-appText-500 text-center my-4"
      >
        {award}
      </Title>
    </div>
  );
};
