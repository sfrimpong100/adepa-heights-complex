import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Waves, PartyPopper, Mountain, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pool from "@/assets/pool.jpg";
import views from "@/assets/views.jpg";
import event from "@/assets/event.jpg";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ROOMS } from "@/data/rooms";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adepa Heights Complex — Escape to Comfort in Akuapem Mampong" },
      { name: "description", content: "Book a peaceful apartment-style stay at Adepa Heights Complex — pool, event spaces and serene views in Akuapem Mampong, Ghana." },
      { property: "og:title", content: "Adepa Heights Complex" },
      { property: "og:description", content: "A peaceful apartment-style getaway in Akuapem Mampong, Eastern Region." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { icon: Building2, title: "Apartments", desc: "Comfortable, fully-equipped apartment-style rooms." },
  { icon: Waves, title: "Swimming Pool", desc: "A refreshing pool framed by tropical greenery." },
  { icon: PartyPopper, title: "Event Venue", desc: "Indoor and outdoor spaces for weddings and gatherings." },
  { icon: Mountain, title: "Peaceful Views", desc: "Wake up to sweeping hill views and cool mountain air." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img src={hero} alt="Adepa Heights Complex at golden hour" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 text-primary-foreground">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold animate-fade-in">
            Akuapem Mampong · Eastern Region
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05] animate-fade-up">
            Escape to Comfort at <span className="text-gradient-gold">Adepa Heights</span> Complex
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 animate-fade-up">
            A peaceful apartment-style getaway in Akuapem Mampong, Eastern Region.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-medium text-gold-foreground shadow-elegant hover:opacity-90 transition-smooth"
            >
              Book Your Stay
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/15 transition-smooth"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Why Adepa Heights"
          title="A retreat designed for stillness"
          description="Every detail is shaped for rest — from the rooms to the views, the water to the quiet hours under the stars."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="rounded-2xl bg-card border border-border p-7 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Stay With Us"
            title="Rooms & Apartments"
            description="From a quiet standard room to our signature luxury suite — choose the space that fits the trip."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ROOMS.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-elegant">
          <img src={pool} alt="Swimming pool" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">The Pool</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
            Slow afternoons by the water
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our pool sits at the heart of the complex — surrounded by palms and the soft hum of the hills.
            Spend the afternoon swimming, sunbathing, or simply doing nothing at all.
          </p>
          <Link
            to="/facilities"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
          >
            Explore Facilities
          </Link>
        </div>
      </section>

      {/* EVENTS CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={event} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-6 text-center text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Celebrate With Us</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Weddings, retreats & private gatherings
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-primary-foreground/85">
            Our indoor hall and lawn space host the most memorable evenings —
            tell us about your event and we'll take it from there.
          </p>
          <Link
            to="/events"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-medium text-gold-foreground shadow-elegant hover:opacity-90 transition-smooth"
          >
            Book Event Space
          </Link>
        </div>
      </section>

      {/* LOCATION */}
      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Find Us</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
            Located in Akuapem Mampong
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Tucked into the cool Akuapem hills, we're a short, scenic drive from Accra —
            perfectly placed for a weekend getaway, a retreat, or a quiet midweek pause.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              <span>{SITE.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary transition-smooth">{SITE.phone}</a>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-elegant">
          <img src={views} alt="Mountain views from Akuapem Mampong" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>
    </>
  );
}
