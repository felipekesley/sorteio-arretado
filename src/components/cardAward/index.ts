import { Content } from "./content";
import { Cotas } from "./cotas";
import { DateCard } from "./date";
import { Desc } from "./desc";
import { FooterCard } from "./footer";
import { ImageCard } from "./image";
import { Root } from "./root";
import { TitleCard } from "./title";

export const CardAward = {
  Root,
  Content,
  Title: TitleCard,
  Desc,
  Date: DateCard,
  Cotas,
  Image: ImageCard,
  Footer: FooterCard,
};
