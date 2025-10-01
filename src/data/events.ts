export type Event = { id: string; title: string; date: string; price: number; spots: number };
export const events: Event[] = [
  { id: "e1", title: "Packaging Workshop", date: "2025-10-12", price: 50, spots: 20 },
  { id: "e2", title: "Print Design Meetup", date: "2025-10-20", price: 0, spots: 40 },
];