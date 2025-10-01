export type Product = { id: string; name: string; price: number; img?: string; tag?: string };
export const products: Product[] = [
  { id: "p1", name: "Custom Notebook", price: 35, tag: "popular" },
  { id: "p2", name: "Gift Box (Small)", price: 25 },
  { id: "p3", name: "Paper Bag (Kraft)", price: 5 },
  { id: "p4", name: "Sticker Pack", price: 15, tag: "offer" },
];