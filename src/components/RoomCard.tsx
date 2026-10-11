import { ArrowRight, BedDouble } from "lucide-react";
import type { Room } from "@/data/rooms";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  const categoryUrl = `/rooms/${room.id}/`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <a href={categoryUrl} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={room.image}
            alt={room.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-semibold text-white">
              {room.title}
            </h3>

            <p className="mt-1 text-sm text-white/90">
              {room.price} per night
            </p>
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="p-6">
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {room.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
          <BedDouble className="h-4 w-4" />
          <span>{room.units.length} units available</span>
        </div>

        <a
          href={categoryUrl}
          className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
        >
          View Rooms
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}