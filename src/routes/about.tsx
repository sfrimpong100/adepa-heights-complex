import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import views from "@/assets/views.jpg";
import hero from "@/assets/hero.jpg";
import { Leaf, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adepa Heights Complex — Our Story" },
      { name: "description", content: "Discover the story behind Adepa Heights Complex — a peaceful apartment getaway in the Akuapem hills of Ghana." },
      { property: "og:title", content: "About Adepa Heights Complex" },
      { property: "og:description", content: "Comfort, privacy and scenic calm in Akuapem Mampong, Eastern Region, Ghana." },
      { property: "og:image", content: views },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Comfort", desc: "Soft beds, calm rooms and the kind of quiet you can actually hear." },
  { icon: Leaf, title: "Nature", desc: "Cool mountain air, lush surroundings and skies you'll want to photograph." },
  { icon: Sparkles, title: "Privacy", desc: "A hidden destination, away from the noise but never far from the city." },
];

function AboutPage() {
  return (
    <>
      <PageHero title="Our Story" subtitle="A hidden getaway shaped by the hills of Akuapem Mampong." image={views} />

      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Welcome</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
            A retreat that quietly takes care of you
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Adepa Heights Complex was built around a simple idea: a place where you can truly slow down.
              Set high in the Akuapem hills, our apartments offer the comfort of home with the polish of a
              boutique resort — a true escape from the rhythm of the city.
            </p>
            <p>
              Whether you're here for a weekend with someone, a family holiday, a working pause, or
              a celebration with loved ones, every corner of the complex has been designed for calm,
              privacy and the kind of stillness that lingers long after you leave.
            </p>
            <p>
              We're located in <strong className="text-foreground">Akuapem Mampong, Eastern Region, Ghana</strong> —
              a short drive from Accra and worlds away in feeling.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
          <img src={hero} alt="Adepa Heights Complex" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-8 text-center shadow-soft">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
