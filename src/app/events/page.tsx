import { events } from "@/data/events";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Events & Meetups</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {events.map((e) => <EventCard key={e.id} e={e} />)}
      </div>
    </section>
  );
}