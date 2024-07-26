import { atom } from "jotai";

type CotasState = {
  quantity: number;
};

export const cotasAtom = atom<CotasState>({
  quantity: 100,
});
