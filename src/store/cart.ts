"use client";
import { create } from "zustand";

type Item = { id: string; name: string; price: number; qty: number; kind: "product" | "event" };
type State = { items: Item[] };
type Actions = {
  add: (i: Omit<Item, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const persisted = (key: string, fn: any) => {
  const store = create<State & Actions>(fn);
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem(key);
    if (raw) store.setState(JSON.parse(raw));
    store.subscribe((s) => localStorage.setItem(key, JSON.stringify(s)));
  }
  return store;
};

export const useCart = persisted("ps-cart", (set, get) => ({
  items: [],
  add: (i, qty = 1) => {
    const items = [...get().items];
    const idx = items.findIndex((x) => x.id === i.id);
    if (idx >= 0) items[idx].qty += qty;
    else items.push({ ...i, qty });
    set({ items });
  },
  remove: (id) => set({ items: get().items.filter((x) => x.id !== id) }),
  clear: () => set({ items: [] }),
}));