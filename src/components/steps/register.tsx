"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { withMask } from "use-mask-input";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SheetCheckout } from "../sheetCheckout";
import { useStepper } from "../stepper";

const FormSchema = z
  .object({
    name: z.string().min(3, {
      message: "Digite o seu nome",
    }),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: "CPF inválido",
    }),
    phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
      message: "Telefone inválido",
    }),
    phoneConfirmation: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
      message: "Telefone inválido",
    }),
    email: z.string().email({
      message: "Email inválido",
    }),
  })
  .refine((data) => data.phone === data.phoneConfirmation, {
    message: "Telefones não coincidem",
    path: ["phoneConfirmation"],
  });

export function Register() {
  const { nextStep } = useStepper();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      cpf: "",
      phone: "",
      phoneConfirmation: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    nextStep();
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome *</FormLabel>
              <FormControl>
                <Input placeholder="Digite o seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF *</FormLabel>
              <FormControl>
                <Input
                  placeholder="000.000.000-00"
                  {...field}
                  ref={withMask("999.999.999-99")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone *</FormLabel>
              <FormControl>
                <Input
                  placeholder="(00) 00000-0000"
                  {...field}
                  ref={withMask("(99) 99999-9999")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmação do telefone *</FormLabel>
              <FormControl>
                <Input
                  placeholder="(00) 00000-0000"
                  {...field}
                  ref={withMask("(99) 99999-9999")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Digite o seu email *</FormLabel>
              <FormControl>
                <Input placeholder="comprador@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SheetCheckout.Root>
          <p className="text-appText-400">
            Ao prosseguir você confirma ser maior de 18 anos e que está de
            acordo com os termos de uso do sorteio.
          </p>

          <SheetCheckout.Footer btnType="submit" />
        </SheetCheckout.Root>
      </form>
    </Form>
  );
}
