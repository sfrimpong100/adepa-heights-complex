import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";
import { ArrowLeft, DoorOpen } from "lucide-react";
import { useEffect, useRef } from "react";
import { ROOMS } from "@/data/rooms";

export const Route = createFileRoute("/rooms/$category/")({
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();

  const categoryRef = useRef<HTMLElement | null>(null);

  const roomCategory = ROOMS.find((room) => room.id === category);

  // Keep the hook before any conditional return/throw.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      categoryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [category]);

  if (!roomCategory) {
    throw notFound();
  }

  return (
    <main ref={categoryRef} className="scroll-mt-24">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rooms
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Accommodation
            </p>

            <h1 className="mt-3 font-display text-4xl md:text-5xl">
              {roomCategory.title}
            </h1>

            <p className="mt-4 text-primary-foreground/75 leading-relaxed">
              {roomCategory.description}
            </p>

            <div className="mt-6 inline-flex rounded-full bg-background/10 border border-primary-foreground/20 px-5 py-2.5 text-sm">
              {roomCategory.price}
            </div>
          </div>
        </div>
      </section>

      {/* Units */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Explore
          </p>

          <h2 className="mt-2 font-display text-3xl text-primary">
            Choose your room
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Select a room to view more information, photos and booking
            options.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {roomCategory.units.map((unit) => (
            <Link
              key={unit.id}
              to="/rooms/$category/$unit"
              params={{
                category: roomCategory.id,
                unit: unit.id.toLowerCase(),
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elegant transition-smooth"
            >
              {/* Room Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={unit.images[0]}
                  alt={`${roomCategory.title} ${unit.name}`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-background/90 backdrop-blur px-4 py-1.5 text-sm font-semibold text-primary">
                  {unit.name}
                </span>
              </div>

              {/* Room Information */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-primary">
                  <DoorOpen className="h-4 w-4 text-gold" />

                  <span className="text-sm font-semibold">
                    Room {unit.name}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {unit.description}
                </p>

                <div className="mt-4 text-sm font-medium text-primary group-hover:text-gold transition-smooth">
                  View Room Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}