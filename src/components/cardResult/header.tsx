import { Trophy } from "lucide-react";
import { Title } from "../_shared/title";

export const Header = ({ winner }: { winner: string }) => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <Trophy strokeWidth={1.25} />
        <p>Ganhador</p>
        <Trophy strokeWidth={1.25} />
      </div>

      <Title
        tag="h3"
        fontWeight="bold"
        className="text-appPrimary-strong text-center my-4"
      >
        {winner}
      </Title>
    </div>
  );
};
