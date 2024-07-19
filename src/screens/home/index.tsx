import { Container } from "@/components/_shared/container";
import { Section } from "@/components/_shared/section";
import { Title } from "@/components/_shared/title";
import { CardAwardList } from "@/components/cardAward";
import { List } from "@/components/cardInfos";
import { DefaultCarousel } from "@/components/carousel";
import { Pin, Ticket } from "lucide-react";

export const HomeScreen = () => {
  return (
    <Container className="">
      <p className="uppercase text-appPrimary block text-center">
        OPORTUNIDADES QUE MUDARÃO SUA VIDA
      </p>

      <Title tag="h2" fontWeight="bold" className="text-white text-center mt-4">
        CONCORRA A PRÊMIOS INCRÍVEIS PARTICIPANDO DE NOSSOS SORTEIOS
      </Title>

      <Section>
        <DefaultCarousel />
      </Section>

      <Section>
        <div className="text-appPrimary flex justify-center gap-4 uppercase">
          <Ticket strokeWidth={1.25} />
          <p>Participe</p>
          <Ticket strokeWidth={1.25} />
        </div>
        <Title
          tag="h2"
          fontWeight="bold"
          className="text-white text-center my-4"
        >
          Sorteios ativos
        </Title>
        <p className="text-appText-500 text-center block">
          Confira os sorteios em andamento e <br /> participe agora mesmo.
        </p>

        <CardAwardList />
      </Section>

      <Section>
        <div className="text-appPrimary flex justify-center gap-4 uppercase">
          <Pin strokeWidth={1.25} />
          <p>Passo a passo</p>
          <Pin strokeWidth={1.25} />
        </div>
        <Title
          tag="h2"
          fontWeight="bold"
          className="text-white text-center my-4"
        >
          Como participar
        </Title>
        <p className="text-appText-500 text-center block mb-6">
          É muito simples! Preparamos um passo a <br /> passo para facilitar sua
          participação
        </p>

        <List />
      </Section>
    </Container>
  );
};
