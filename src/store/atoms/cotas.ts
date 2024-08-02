import { atom } from "jotai";

type CotasState = {
  quantity: number;
  price: number;
};

export const cotasAtom = atom<CotasState>({
  quantity: 0,
  price: 0,
});
