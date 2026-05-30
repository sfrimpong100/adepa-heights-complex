import { Link } from "@tanstack/react-router";
import { Wifi, Snowflake, Bath, Tv, Bed, Check } from "lucide-react";
import type { Room } from "@/data/rooms";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  WiFi: Wifi,
  "Air Conditioning": Snowflake,
  "Private Bathroom": Bath,
  "En-suite Bath": Bath,
  TV: Tv,
  "Smart TV": Tv,
  "Comfortable Bed": Bed,
  "King Bed": Bed,
};

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
        />
        <span className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium text-primary">
          {room.price}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-primary">{room.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{room.description}</p>

        <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-foreground/80">
          {room.amenities.map((a) => {
            const Icon = ICONS[a] ?? Check;
            return (
              <li key={a} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-gold" />
                {a}
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact"
          search={{ room: room.title } as never}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
}
