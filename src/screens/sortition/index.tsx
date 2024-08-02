import { GalleryCarousel } from "@/components/_data/carousel/gallery";
import { GetCotas } from "@/components/_data/cotas";
import { Container } from "@/components/_shared/container";
import { Section } from "@/components/_shared/section";
import { Title } from "@/components/_shared/title";
import { AddCotas } from "@/components/cardAddCotas";
import { List } from "@/components/cardInfos";
import { Checkout } from "@/components/sheetCheckout";
import { Button } from "@/components/ui/button";
import { Newspaper, Pin, Ticket } from "lucide-react";
import Link from "next/link";

export const SortitionScreen = () => {
  return (
    <>
      <Container className="">
        <p className="uppercase text-appPrimary block text-center">
          AÇÃO DO RAFAEL CUNHA
        </p>

        <Title
          tag="h2"
          fontWeight="bold"
          className="text-white text-center mt-4"
        >
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

        <Section className="appblur-2 relative w-[calc(100%_+_48px)] -ml-6">
          <div className="px-6">
            <div className="text-appPrimary flex justify-center gap-4 uppercase">
              <Ticket strokeWidth={1.25} />
              <p>compre</p>
              <Ticket strokeWidth={1.25} />
            </div>
            <Title
              tag="h2"
              fontWeight="bold"
              className="text-white text-center my-4"
            >
              Adquira suas cotas
            </Title>
            <p className="text-appText-500 text-center block">
              Selecione a quantidade de cotas e prossiga
            </p>

            <div className="">
              <Title
                tag="h3"
                fontWeight="bold"
                className="text-white text-center my-4"
              >
                {" "}
                Aproveite combos com desconto
              </Title>

              <GetCotas />

              <AddCotas className="mt-12" />
            </div>
          </div>
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
            É muito simples! Preparamos um passo a <br /> passo para facilitar
            sua participação
          </p>

          <List />

          <Button className="block w-full mt-10">Quero participar!</Button>
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

      <Checkout />
    </>
  );
};
