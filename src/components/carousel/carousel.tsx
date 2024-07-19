"use client";

import {
  CarouselContent,
  Carousel as ShadCarousel,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

type Props = {
  children: React.ReactNode;
  time?: number;
  className?: string;
};

export const Carousel = ({ children, time = 5000, className }: Props) => {
  return (
    <ShadCarousel
      className={className}
      plugins={[
        Autoplay({
          delay: time,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>{children}</CarouselContent>
    </ShadCarousel>
  );
};
