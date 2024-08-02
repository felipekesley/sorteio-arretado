"use client";

import { Container } from "@/components/_shared/container";
import { Title } from "@/components/_shared/title";
import { Step, Stepper } from "@/components/stepper";
import { Payment, Register, Revision } from "@/components/steps";
import { cotasAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = [
  { label: "Dados", description: "" },
  { label: "Revisão", description: "" },
  { label: "Pagamento", description: "" },
];

export const Checkout = () => {
  const router = useRouter();
  const [total] = useAtom(cotasAtom);

  if (total.price === 0) router.push("/sorteio");

  return (
    <div className="w-full min-h-screen relative before:fixed before:z-10 before:bg-black/50 before:top-0 before:left-1/2 before:h-screen before:w-full before:max-w-[475px] before:-translate-x-1/2">
      <div className="relative z-20 pt-8 bg-white min-h-screen rounded-t-2xl">
        <Container className="mb-10">
          <Stepper variant="circle-alt" initialStep={0} steps={steps}>
            {steps.map((stepProps, index) => {
              if (index === 0) {
                return (
                  <Step key={stepProps.label} {...stepProps}>
                    <div className="pt-12">
                      <div className="mb-8">
                        <Title
                          tag="h3"
                          fontWeight="bold"
                          className="text-appPrimary-strong text-center my-4"
                        >
                          Dados do comprador
                        </Title>

                        <p className="text-center">
                          Já possui conta cadastrada?{" "}
                          <Link
                            href="/login?return=checkout&step=revisao"
                            className="text-appSecondary-400"
                          >
                            Clique aqui!
                          </Link>
                        </p>
                      </div>

                      <Register />
                    </div>
                  </Step>
                );
              }
              if (index === 1) {
                return (
                  <Step key={stepProps.label} {...stepProps}>
                    <Revision />
                  </Step>
                );
              }
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <Payment />
                </Step>
              );
            })}
          </Stepper>
        </Container>
      </div>
    </div>
  );
};
