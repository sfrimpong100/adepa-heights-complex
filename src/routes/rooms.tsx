import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { ROOMS } from "@/data/rooms";
import luxury from "@/assets/room-luxury.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Apartments — Adepa Heights Complex" },
      { name: "description", content: "Choose from standard rooms, executive studios, family apartments and luxury suites at Adepa Heights Complex." },
      { property: "og:title", content: "Rooms & Apartments" },
      { property: "og:description", content: "Comfortable apartment-style stays in Akuapem Mampong, Ghana." },
      { property: "og:image", content: luxury },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <PageHero title="Rooms & Apartments" subtitle="Four ways to make yourself at home." image={luxury} />
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ROOMS.map((r) => (
            <RoomCard key={r.id} room={r} />
          ))}
        </div>
      </section>
    </>
  );
}
