import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FacilityCard } from "@/components/FacilityCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Waves, Building, TreePine, Coffee, Car, Mountain } from "lucide-react";
import pool from "@/assets/pool.png";
import event from "@/assets/event.jpg";
import views from "@/assets/views.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Adepa Heights Complex" },
      { name: "description", content: "Swimming pool, event venues, lounges, parking and scenic surroundings at Adepa Heights Complex." },
      { property: "og:title", content: "Facilities at Adepa Heights" },
      { property: "og:description", content: "Pool, event spaces, lounge areas and more in Akuapem Mampong." },
      { property: "og:image", content: pool },
    ],
  }),
  component: FacilitiesPage,
});

const FACILITIES = [
  { icon: Waves, title: "Swimming Pool", description: "A refreshing pool surrounded by tropical greenery, with loungers for slow afternoons.", image: pool },
  { icon: Building, title: "Indoor Event Venue", description: "Elegant indoor hall for weddings, receptions and corporate gatherings.", image: event },
  { icon: TreePine, title: "Outdoor Event Space", description: "A landscaped lawn perfect for ceremonies, parties and open-air dinners.", image: views },
  { icon: Coffee, title: "Lounge & Relaxation", description: "Quiet seating areas inside and out — read, work or simply unwind." },
  { icon: Car, title: "Secure Parking", description: "Ample on-site parking with 24-hour security for your peace of mind." },
  { icon: Mountain, title: "Beautiful Surroundings", description: "Sweeping hill views, cool mountain air and gardens worth exploring." },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero title="Facilities" subtitle="Every amenity designed to help you exhale." image={pool} />
      <section className="container mx-auto px-6 py-20">
        <SectionHeading eyebrow="Amenities" title="Everything you need, quietly arranged" />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <FacilityCard key={f.title} {...f} />
          ))}
        </div>
      </section>
    </>
  );
}
