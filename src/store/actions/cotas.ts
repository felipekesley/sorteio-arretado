import { atom } from "jotai";
import { cotasAtom } from "../atoms";

export const setQuantityAtom = atom(null, (get, set, newQuantity: number) => {
  set(cotasAtom, { quantity: newQuantity });
});

export const addQuantityAtom = atom(
  (get) => get(cotasAtom),
  (get, set, amount: number) => {
    const currentState = get(cotasAtom);
    const newState = {
      ...currentState,
      quantity: currentState.quantity + amount,
    };
    set(cotasAtom, newState);
  }
);

export const removeQuantityAtom = atom(
  (get) => get(cotasAtom),
  (get, set, amount: number) => {
    const currentState = get(cotasAtom);
    const newState = {
      ...currentState,
      quantity: currentState.quantity - amount,
    };
    set(cotasAtom, newState);
  }
);
