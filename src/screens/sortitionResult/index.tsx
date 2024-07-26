import { GalleryCarousel } from "@/components/_data/carousel/gallery";
import { GetCotas } from "@/components/_data/cotas";
import { Container } from "@/components/_shared/container";
import { Section } from "@/components/_shared/section";
import { Title } from "@/components/_shared/title";
import { AddCotas } from "@/components/cardAddCotas";
import { List } from "@/components/cardInfos";
import { CardResult } from "@/components/cardResult";
import { Button } from "@/components/ui/button";
import { Newspaper, Pin, Ticket, Trophy } from "lucide-react";
import Link from "next/link";

export const SortitionResultScreen = () => {
  return (
    <Container className="">
      <p className="uppercase text-appPrimary block text-center">
        AÇÃO DO RAFAEL CUNHA
      </p>

      <Title tag="h2" fontWeight="bold" className="text-white text-center mt-4">
        HILUX OU 300 MIL NO PIX + Ebook Tráfego Digital
      </Title>

      <Section>
        {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <video controls className="rounded-lg">
          <source src="/video.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </Section>

      <Section className="-space-x-6">
        <Title
          tag="h3"
          fontWeight="bold"
          className="text-white text-center my-4"
        >
          Galeria de fotos
        </Title>

        <div className="!-mr-6">
          <GalleryCarousel />
        </div>
      </Section>

      <Section>
        <Title
          tag="h3"
          fontWeight="bold"
          className="text-white text-center my-4"
        >
          Resultados
        </Title>
        <p className="uppercase text-appText-500 block text-center">
          Confira os ganhadores
        </p>
        <CardResult.Root className="mt-8">
          <CardResult.Header winner="André Silva Campos" />
          <CardResult.Divider />
          <CardResult.Award award="3 iPhones ou 20 mil reais no Pix + Ebook Tráfego Digital" />
          <CardResult.Quota quota="Nº 724421" />
        </CardResult.Root>
      </Section>

      <Section>
        <div className="text-appPrimary flex justify-center gap-4 uppercase">
          <Newspaper strokeWidth={1.25} />
          <p>regulamento</p>
          <Newspaper strokeWidth={1.25} />
        </div>
        <Title
          tag="h2"
          fontWeight="bold"
          className="text-white text-center my-4"
        >
          Ficou com dúvida?
        </Title>
        <p className="text-appText-500 text-center block">
          Confira nosso regulamento e fique por <br /> dentro dos sorteios e
          premiações.
        </p>

        <Button
          asChild
          className="flex items-center justify-center w-full mt-10 text-center"
        >
          <Link href="/" title="Nosso regulamento">
            Nosso regulamento
          </Link>
        </Button>

        <hr className="mt-12 border-b-2" />
      </Section>
    </Container>
  );
};
