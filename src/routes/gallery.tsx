import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import {
  ArrowRight,
  CalendarDays,
  Camera,
} from "lucide-react";

import img4 from "@/assets/img4.png";
import pool from "@/assets/pool.png";
import event from "@/assets/event.png";
import views from "@/assets/views.png";
import img12 from "@/assets/img12.png";
import img1 from "@/assets/img1.jpg";
import img13 from "@/assets/img13.png";
import img5 from "@/assets/img5.png";
import img3 from "@/assets/img3.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img14 from "@/assets/img14.png";
import img15 from "@/assets/img15.png";
import img16 from "@/assets/img16.png";
import img17 from "@/assets/img17.png";
import img18 from "@/assets/img18.png";
import img19 from "@/assets/img19.png";
import img20 from "@/assets/img20.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery — Adepa Heights Complex",
      },
      {
        name: "description",
        content:
          "Explore Adepa Heights Complex through our gallery — accommodation, pool, events, interiors and views from Akuapem Mampong.",
      },
      {
        property: "og:title",
        content: "Gallery — Adepa Heights",
      },
      {
        property: "og:description",
        content:
          "Explore photos of the rooms, pool, event spaces and surroundings at Adepa Heights Complex.",
      },
      {
        property: "og:image",
        content: img4,
      },
    ],
  }),

  component: GalleryPage,
});

const ITEMS: GalleryItem[] = [
  {
    src: img4,
    alt: "Aerial view of Adepa Heights Complex in Akuapem Mampong",
  },
  {
    src: pool,
    alt: "Swimming pool at Adepa Heights Complex",
  },
  {
    src: img5,
    alt: "img",
  },
  {
    src: event,
    alt: "Event space at Adepa Heights Complex",
  },
  {
    src: views,
    alt: "Scenic views around Akuapem Mampong",
  },
  {
    src: img12,
    alt: "img12",
  },
  {
    src: img1,
    alt: "img",
  },
  {
    src: img13,
    alt: "img",
  },
{
    src: img6,
    alt: "img",
  },
  {
    src: img7,
    alt: "img",
  },
  {
    src: img3,
    alt: "img",
  },
  {
    src: img8,
    alt: "img",
  },
  {
    src: img9,
    alt: "img",
  },
  {
    src: img10,
    alt: "img",
  },
  {
    src: img11,
    alt: "img",
  },
  {
    src: img14,
    alt: "img",
  },
  {
    src: img15,
    alt: "img",
  },
{
    src: img16,
    alt: "img",
  },
  {
    src: img17,
    alt: "img",
  },
  {
    src: img18,
    alt: "img",
  },
  {
    src: img19,
    alt: "img",
  },
  {
    src: img20,
    alt: "img",
  },
];

function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Gallery"
        subtitle="A glimpse of life at Adepa Heights."
        image={img4}
      />

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
            <Camera
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">
            Explore Adepa Heights
          </p>

          <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
            See the experience before you arrive
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Take a look around Adepa Heights Complex — from our accommodation
            and refreshing pool to event spaces and the peaceful surroundings
            of Akuapem Mampong.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-6 pb-20 md:pb-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Moments & Spaces
            </p>

            <h2 className="mt-2 font-display text-2xl text-primary md:text-3xl">
              Around Adepa Heights
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
            Browse our spaces, rooms, surroundings and moments captured around
            the complex.
          </p>
        </div>

        <GalleryGrid items={ITEMS} />
      </section>

      {/* Explore Rooms */}
      <section className="bg-muted/30 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Find Your Stay
              </p>

              <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
                Like what you see?
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Explore our accommodation options and find the room or
                apartment that suits your stay at Adepa Heights Complex.
              </p>
            </div>

            <Link
              to="/rooms"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:bg-primary/90"
            >
              Explore Rooms
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Event CTA */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-7 py-12 text-primary-foreground md:px-12 md:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
              <CalendarDays
                className="h-6 w-6"
                aria-hidden="true"
              />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">
              Plan Your Visit
            </p>

            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Make Adepa Heights part of your next occasion
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              Whether you are planning a stay, a celebration or a gathering,
              get in touch with us to discuss your plans.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-medium text-gold-foreground shadow-elegant transition-smooth hover:opacity-90"
              >
                Explore Rooms
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-medium text-primary-foreground transition-smooth hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}