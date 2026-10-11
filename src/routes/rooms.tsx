import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { RoomCard } from "@/components/RoomCard";
import { PageHero } from "@/components/PageHero";
import { ROOMS } from "@/data/rooms";
import luxury from "@/assets/room-luxury.jpg";

export const Route = createFileRoute("/rooms")({
  component: RoomsPage,
});

function RoomsPage() {
  const pathname = window.location.pathname;

  // Child room/category routes should render their own pages.
  const isChildRoute = pathname !== "/rooms" && pathname !== "/rooms/";

  if (isChildRoute) {
    return <Outlet />;
  }

  return (
    <>
      <PageHero
        title="Rooms & Apartments"
        subtitle="Discover comfortable rooms and spacious apartments at Adepa Heights Complex."
        image={luxury}
      />

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </>
  );
}