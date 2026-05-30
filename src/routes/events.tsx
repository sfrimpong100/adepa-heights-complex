import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import event from "@/assets/event.jpg";
import { Heart, Cake, Briefcase, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Weddings, Parties & Corporate Gatherings | Adepa Heights" },
      { name: "description", content: "Host weddings, birthdays, retreats and corporate events at Adepa Heights Complex in Akuapem Mampong, Ghana." },
      { property: "og:title", content: "Events at Adepa Heights" },
      { property: "og:description", content: "Indoor and outdoor event spaces for unforgettable gatherings." },
      { property: "og:image", content: event },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  { icon: Heart, title: "Weddings", desc: "Hilltop ceremonies and elegant receptions, indoors or under the stars." },
  { icon: Cake, title: "Birthday Parties", desc: "Intimate dinners or full celebrations — we'll set the scene." },
  { icon: Sparkles, title: "Private Events", desc: "Anniversaries, baby showers and milestone moments." },
  { icon: Users, title: "Retreats", desc: "Wellness, spiritual or team retreats in serene surroundings." },
  { icon: Briefcase, title: "Corporate Gatherings", desc: "Off-sites, board sessions and team-building in a quiet, focused setting." },
];

function EventsPage() {
  return (
    <>
      <PageHero title="Events" subtitle="A setting that holds the moment — and the memory." image={event} />

      <section className="container mx-auto px-6 py-20">
        <SectionHeading eyebrow="Host With Us" title="Made for moments that matter" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e) => (
            <div key={e.title} className="rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-elegant transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                <e.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-9 py-4 text-sm font-medium text-gold-foreground shadow-elegant hover:opacity-90 transition-smooth"
          >
            Book Event Space
          </Link>
        </div>
      </section>
    </>
  );
}
