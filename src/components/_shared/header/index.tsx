import { Container } from "@/components/_shared/container";
import { AlignJustify, UserRound } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full pt-6 pb-2 mb-10">
      <Container className="flex items-center justify-between">
        <button
          type="button"
          className="bg-white rounded-md w-10 h-10 flex items-center justify-center"
        >
          <AlignJustify strokeWidth={1.25} />
        </button>
        <Image src="/logo.png" width="128" height="58" alt="logo" />
        <button
          type="button"
          className="bg-white rounded-md w-10 h-10 flex items-center justify-center"
        >
          <UserRound strokeWidth={1.25} />
        </button>
      </Container>
    </header>
  );
};
