import { atom } from "jotai";
import { cotasAtom } from "../atoms";

export const setCotaAtom = atom(
  null,
  (get, set, newQuantity: number, newPrice: number) => {
    set(cotasAtom, { quantity: newQuantity, price: newPrice });
  }
);

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

export const addPriceAtom = atom(
  (get) => get(cotasAtom),
  (get, set, amount: number) => {
    const currentState = get(cotasAtom);
    const newState = {
      ...currentState,
      price: currentState.price + amount,
    };
    set(cotasAtom, newState);
  }
);
