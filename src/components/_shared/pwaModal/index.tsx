"use client";

import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const PwaModal = ({ show, onClose, onInstall }: any) => {
  return (
    show && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative">
          
          <Button variant="app" onClick={onClose}>
              <CircleX />
            </Button>
          <div className="bg-appPrimary-50 p-4 rounded-2xl shadow-2xl flex items-center justify-center flex-col gap-4 max-w-[344px]">
            <h2 className="text-center font-bold text-xl text-appPrimary-200">
              Instale o aplicativo
            </h2>
            <p className="text-center">
              clique no botão para instalar o aplicativo em seu dispositivo.
            </p>

            <Button variant="app" onClick={onInstall}>
              Instalar
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
