import { Carousel } from "@/components/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export const GalleryCarousel = () => {
  const photos = Array.from({ length: 4 });

  return (
    <Carousel>
      {photos.map(() => (
        <CarouselItem key={crypto.randomUUID()} className="basis-9/12 pl-4">
          <div className="relative w-full">
            <Image src="/car-1.png" width={440} height={280} alt="image" />
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
};
