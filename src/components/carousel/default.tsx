import { Carousel } from "@/components/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export const DefaultCarousel = () => {
  const banners = Array.from({ length: 4 });

  return (
    <Carousel className="-mx-6">
      {banners.map((_, index) => (
        <CarouselItem key={index} className="basis-9/12 pl-4">
          <div className="relative w-full">
            <Image
              src="/banner-1.png"
              width={450}
              height={250}
              alt="image banner"
            />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
};
