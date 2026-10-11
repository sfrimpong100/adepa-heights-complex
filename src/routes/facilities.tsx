import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FacilityCard } from "@/components/FacilityCard";
import { SectionHeading } from "@/components/SectionHeading";

import {
  Waves,
  Building,
  TreePine,
  Coffee,
  Car,
  Mountain,
  Zap,
  Wifi,
  Home,
  Presentation,
  ConciergeBell,
  Wine,
  BrushCleaningIcon,
} from "lucide-react";

import pool from "@/assets/pool.png";
import event from "@/assets/event.png";
import views from "@/assets/views.png";
import generator from "@/assets/generator.png";
import wifi from "@/assets/wifi.png";
import breakfast from "@/assets/breakfast.jpg";
import img5 from "@/assets/img5.png";
import Parking from "@/assets/Parking.png";
import indoor from "@/assets/indoor.png";
import conference from "@/assets/conference.png";
import roomService from "@/assets/room-service.jpg";
import bar from "@/assets/bar.png";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      {
        title: "Facilities — Adepa Heights Complex",
      },
      {
        name: "description",
        content:
          "Swimming pool, event venues, lounges, parking, free Wi-Fi, breakfast, backup power and scenic surroundings at Adepa Heights Complex.",
      },
      {
        property: "og:title",
        content: "Facilities at Adepa Heights",
      },
      {
        property: "og:description",
        content:
          "Pool, event spaces, lounge areas, free Wi-Fi, breakfast, backup power and more in Akuapem Mampong.",
      },
      {
        property: "og:image",
        content: pool,
      },
    ],
  }),

  component: FacilitiesPage,
});

const FACILITIES = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description:
      "A refreshing pool surrounded by tropical greenery, with loungers for slow afternoons.",
    image: pool,
  },

  {
    icon: Building,
    title: "Indoor Event Venue",
    description:
      "Elegant indoor hall for weddings, receptions and corporate gatherings.",
    image: indoor,
  },

   {
    icon: Presentation,
    title: "Conference Hall",
    description:
      "A dedicated space for meetings, conferences, workshops, presentations and corporate events.",
    image: conference,
  },

  {
    icon: TreePine,
    title: "Outdoor Event Space",
    description:
      "A landscaped lawn perfect for ceremonies, parties and open-air dinners.",
    image: event,
  },

  {
    icon: Mountain,
    title: "Beautiful Surroundings",
    description:
      "Sweeping hill views, cool mountain air and gardens worth exploring.",
    image: views,
  },

  {
    icon: Zap,
    title: "Generator",
    description:
      "Backup power is available to help keep essential facilities running during power interruptions.",
    image: generator,
  },

  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Enjoy complimentary Wi-Fi access throughout the complex and stay connected during your visit.",
    image: wifi,
  },

 {
    icon: BrushCleaningIcon,
    title: "Room Service",
    description:
      "Enjoy convenient in-room service designed to make your stay more comfortable and relaxing.",
    image: roomService,
  },

  {
    icon: Wine,
    title: "Bar",
    description:
      "Relax and unwind with a selection of drinks in a comfortable setting at Adepa Heights.",
    image: bar,
  },

  {
    icon: Coffee,
    title: "Breakfast",
    description:
      "Start your day with breakfast available for guests at Adepa Heights Complex.",
    image: breakfast,
  },

  {
    icon: Home,
    title: "Lounge & Relaxation",
    description:
      "Quiet seating areas inside and out — read, work or simply unwind.",
      image: img5,
  },

  {
    icon: Car,
    title: "Secure Parking",
    description:
      "Ample on-site parking with 24-hour security for your peace of mind.",
      image: Parking,
  },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Facilities"
        subtitle="Every amenity designed to help you exhale."
        image={pool}
      />

      <section className="container mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything you need, quietly arranged"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility) => (
            <FacilityCard
              key={facility.title}
              {...facility}
            />
          ))}
        </div>
      </section>
    </>
  );
}