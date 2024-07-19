import Image from "next/image";

type Props = {
  url: string;
  alt?: string;
};

export const ImageCard = ({ alt = "", url }: Props) => {
  return (
    <div className="relative w-32">
      <Image src={url} fill alt={alt} className="object-cover h-full" />
    </div>
  );
};
