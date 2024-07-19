import { infos } from "@/seed";
import { CardInfo } from ".";

export const List = () => {
  return (
    <ul className="flex flex-col gap-4 border-2 border-white overflow-hidden rounded-lg">
      {infos.map((info, index) => (
        <li
          key={info.id}
          className="border-b-2 last:border-b-0 border-white p-4"
        >
          <CardInfo.Root>
            <CardInfo.Index index={index + 1} />
            <CardInfo.Content>
              <CardInfo.Title text={info.title} />
              <CardInfo.Text text={info.text} />
            </CardInfo.Content>
          </CardInfo.Root>
        </li>
      ))}
    </ul>
  );
};
