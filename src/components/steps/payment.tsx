"use client";

import { ChevronLeft } from "lucide-react";
import { Title } from "../_shared/title";
import { CardAward } from "../cardAward";

import Image from "next/image";
import { useStepper } from "../stepper";

export function Payment() {
  const { nextStep, prevStep } = useStepper();

  return (
    <>
      <div className="mt-16 mb-6">
        <Title
          tag="h3"
          fontWeight="bold"
          className="text-dark text-center relative mb-8"
        >
          <span
            className="absolute left-0 top-1 cursor-pointer"
            onClick={() => prevStep()}
          >
            <ChevronLeft />
          </span>{" "}
          Pagamento via Pix
        </Title>

        <div className="p-3 bg-appText-200 rounded-lg flex items-center justify-center max-w-max mx-auto">
          <Image src="/qrcode.png" width={180} height={180} alt="qrcde" />
        </div>
      </div>

      <div className="text-center px-8 mb-8">
        <Title tag="h5" fontWeight="bold" className="text-dark relative mb-4">
          As chaves estão prontas
        </Title>
        <p>Faça o download do QR Code ou copie o código Copia e Cola</p>
      </div>

      <div className="p-3 bg-appText-200 rounded-lg">
        <Title tag="h5" fontWeight="bold" className="text-dark relative mb-4">
          Código
        </Title>

        <span className="break-words">
          0002010102020102000001020br.gov.bcb.pix2020pix.santander.com.br/qr/v2ijdai8u7-9ajsd9ja9f0af-91293f-204812410fasf-09021841571250180285012SAOPAULO0129048120810825281
        </span>
      </div>
    </>
  );
}
