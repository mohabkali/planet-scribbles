"use client";
import { create, type StateCreator } from "zustand";

type Item = {
  id: string;
  name: string;
  price: number;
  qty: number;
  kind: "product" | "event";
};

type State = { items: Item[] };
type Actions = {
  add: (i: Omit<Item, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};
type Store = State & Actions;

const persisted = <T extends object>(key: string, creator: StateCreator<T>) => {
  const store = create<T>(creator);

  if (typeof window !== "undefined") {
    const raw = localStorage.getItem(key);
    if (raw) {
      // Merge partial state (no replace flag)
      store.setState(JSON.parse(raw) as Partial<T>);
    }
    store.subscribe((s) => localStorage.setItem(key, JSON.stringify(s)));
  }

  return store;
};

export const useCart = persisted<Store>("ps-cart", (set, get) => ({
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