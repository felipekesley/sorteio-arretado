import { awards } from "@/data/awards/";
import { cn } from "@/lib/utils";
import { CardAward } from "@/components/cardAward";

export const ListActive = async ({ className }: { className?: string }) => {
  const data = await awards.active();

  return (
    <ul className={cn("mt-8 flex flex-col gap-4", className)}>
      {data?.map((item) => (
        <li key={item.id}>
          <CardAward.Root href={`sorteio/${item.slug}`}>
            <CardAward.Image url={item.image} />
            <CardAward.Content>
              <CardAward.Title text={item.title} />
              <CardAward.Desc text={item.desc} />
              <CardAward.Footer>
                <CardAward.Date text={item.date} />
                <CardAward.Cotas text={item.cotas} />
              </CardAward.Footer>
            </CardAward.Content>
          </CardAward.Root>
        </li>
      ))}
    </ul>
  );
};
