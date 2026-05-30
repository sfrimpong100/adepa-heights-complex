import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import event from "@/assets/event.jpg";
import views from "@/assets/views.jpg";
import standard from "@/assets/room-standard.jpg";
import executive from "@/assets/room-executive.jpg";
import family from "@/assets/room-family.jpg";
import luxury from "@/assets/room-luxury.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Adepa Heights Complex" },
      { name: "description", content: "A look inside Adepa Heights Complex — rooms, pool, events and the surrounding Akuapem hills." },
      { property: "og:title", content: "Gallery — Adepa Heights" },
      { property: "og:description", content: "Photos of our rooms, pool, event spaces and views." },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const ITEMS: GalleryItem[] = [
  { src: hero, alt: "Aerial view of Adepa Heights Complex" },
  { src: pool, alt: "Swimming pool at golden hour" },
  { src: luxury, alt: "Luxury suite interior" },
  { src: event, alt: "Outdoor event setup" },
  { src: views, alt: "Mountain views from Akuapem Mampong" },
  { src: standard, alt: "Standard room" },
  { src: executive, alt: "Executive studio" },
  { src: family, alt: "Family apartment living area" },
];

function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="A glimpse of life at Adepa Heights." image={hero} />
      <section className="container mx-auto px-6 py-20">
        <GalleryGrid items={ITEMS} />
      </section>
    </>
  );
}
