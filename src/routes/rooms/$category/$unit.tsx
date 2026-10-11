import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bath,
  Bed,
  Check,
  ChevronLeft,
  ChevronRight,
  Snowflake,
  Tv,
  Users,
  Wifi,
  Building2,
  CalendarDays,
  Play,
} from "lucide-react";
import { useState } from "react";
import { ROOMS } from "@/data/rooms";

const ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  WiFi: Wifi,
  "Air Conditioning": Snowflake,
  "Private Bathroom": Bath,
  "Private Bathrooms": Bath,
  TV: Tv,
  "Comfortable Bed": Bed,
  "Single Bed": Bed,
  "Multiple Beds": Bed,
  "Living Space": Building2,
  "Spacious Living Area": Building2,
  "Mini Kitchen": Building2,
};

export const Route = createFileRoute("/rooms/$category/$unit")({
  component: RoomDetailsPage,
});

function RoomDetailsPage() {
  const { category, unit } = Route.useParams();

  const [activeImage, setActiveImage] = useState(0);

  const roomCategory = ROOMS.find((room) => room.id === category);

  if (!roomCategory) {
    throw notFound();
  }

  const room = roomCategory.units.find(
    (item) => item.id.toLowerCase() === unit.toLowerCase()
  );

  if (!room) {
    throw notFound();
  }

  const nextImage = () => {
    setActiveImage((current) =>
      current === room.images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? room.images.length - 1 : current - 1
    );
  };

  return (
    <main>
      {/* =========================================================
          BACK TO CATEGORY
          ========================================================= */}

      <section className="container mx-auto px-6 pt-8 md:pt-12">
        <Link
          to="/rooms/$category/"
          params={{ category: roomCategory.id }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {roomCategory.title}
        </Link>
      </section>

      {/* =========================================================
          FEATURED ROOM IMAGE
          ========================================================= */}

      <section className="container mx-auto px-6 pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-muted">
          {room.images.length > 0 ? (
            <img
              src={room.images[activeImage]}
              alt={`${room.name} - ${roomCategory.title}`}
              className="w-full aspect-[16/9] object-cover"
            />
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center bg-muted">
              <p className="text-sm text-muted-foreground">
                Room image coming soon.
              </p>
            </div>
          )}

          {room.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg hover:bg-background transition-smooth"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg hover:bg-background transition-smooth"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                {activeImage + 1} / {room.images.length}
              </div>
            </>
          )}
        </div>
      </section>

      {/* =========================================================
          ROOM INFORMATION + BOOKING
          ========================================================= */}

      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* =====================================================
              ROOM INFORMATION
              ===================================================== */}

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              {roomCategory.title}
            </p>

            <h1 className="mt-3 font-display text-4xl md:text-5xl text-primary">
              Room {room.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                {roomCategory.price}
              </span>

              {room.capacity && (
                <span className="rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
                  {room.capacity}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
              {room.description}
            </p>

            {/* =================================================
                QUICK INFORMATION
                ================================================= */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {/* Capacity */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <Users className="h-5 w-5 text-gold" />

                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Capacity
                </p>

                <p className="mt-1 font-medium text-primary">
                  {room.capacity || "Not specified"}
                </p>
              </div>

              {/* Bed Type */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <Bed className="h-5 w-5 text-gold" />

                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Bed Type
                </p>

                <p className="mt-1 font-medium text-primary">
                  {room.bedType || "Not specified"}
                </p>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <Building2 className="h-5 w-5 text-gold" />

                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Location
                </p>

                <p className="mt-1 font-medium text-primary">
                  {room.floor || "Not specified"}
                </p>
              </div>
            </div>

            {/* =================================================
                AMENITIES
                ================================================= */}

            <div className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl text-primary">
                Room Amenities
              </h2>

              {room.amenities.length > 0 ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {room.amenities.map((amenity) => {
                    const Icon = ICONS[amenity] ?? Check;

                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-gold" />

                        <span className="text-sm">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-5 text-sm text-muted-foreground">
                  Room amenities will be added soon.
                </p>
              )}
            </div>
          </div>

          {/* =====================================================
              BOOKING CARD
              ===================================================== */}

          <aside>
            <div className="sticky top-28 rounded-3xl border border-border bg-card p-6 md:p-7 shadow-elegant">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Room Rate
              </p>

              <h2 className="mt-2 font-display text-3xl text-primary">
                {roomCategory.price}
              </h2>

              <div className="mt-6 rounded-2xl bg-muted/40 p-5">
                <p className="text-sm font-semibold text-primary">
                  Room {room.name}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {roomCategory.title}
                </p>
              </div>

              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                {room.capacity && (
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold" />
                    {room.capacity}
                  </div>
                )}

                {room.bedType && (
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold" />
                    {room.bedType}
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-gold" />
                  {room.amenities.length} amenities included
                </div>
              </div>

              <Link
                to="/contact"
                search={{
                  room: `${roomCategory.title} — ${room.name}`,
                }}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
              >
                <CalendarDays className="h-4 w-4" />
                Book This Room
              </Link>

              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                Contact us to check availability and make your reservation.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          ROOM GALLERY
          ========================================================= */}

      <section className="container mx-auto px-6 pb-12 md:pb-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Explore
          </p>

          <h2 className="mt-2 font-display text-2xl md:text-3xl text-primary">
            {room.name} Gallery
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Explore the spaces, rooms and features of this accommodation.
          </p>
        </div>

        {room.images.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {room.images.map((image, index) => (
              <button
                key={`${image}-gallery-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-smooth ${
                  activeImage === index
                    ? "border-gold"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${room.name} photo ${index + 1}`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  View
                </span>

                {activeImage === index && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Selected
                  </span>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center">
            <p className="text-sm text-muted-foreground">
              Photos of Room {room.name} will be added soon.
            </p>
          </div>
        )}
      </section>

      {/* =========================================================
          ROOM VIDEO
          ========================================================= */}

      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-primary">
            Room Video
          </h2>

          {room.videos.length > 0 ? (
            <div className="mt-6 space-y-6">
              {room.videos.map((video, index) => (
                <div
                  key={`${video}-${index}`}
                  className="overflow-hidden rounded-2xl bg-black"
                >
                  <video
                    src={video}
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    Your browser does not support video playback.
                  </video>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="ml-1 h-6 w-6" />
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                A video tour of Room {room.name} will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          ABOUT THIS ROOM
          ========================================================= */}

      <section className="container mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-primary">
            About This Room
          </h2>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Room {room.name} is part of our{" "}
            {roomCategory.title.toLowerCase()}. It is designed to provide
            guests with a comfortable, convenient and relaxing environment
            during their stay at Adepa Heights Complex.
          </p>
        </div>
      </section>
    </main>
  );
}