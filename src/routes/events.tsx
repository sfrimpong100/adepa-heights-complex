import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import img9 from "@/assets/img9.jpg";
import event from "@/assets/event.png";
import {
  Heart,
  Cake,
  Briefcase,
  Users,
  Sparkles,
  Presentation,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      {
        title: "Events — Weddings, Parties & Corporate Gatherings | Adepa Heights",
      },
      {
        name: "description",
        content:
          "Host weddings, birthdays, retreats, conferences and corporate gatherings at Adepa Heights Complex in Akuapem Mampong, Ghana.",
      },
      {
        property: "og:title",
        content: "Events at Adepa Heights",
      },
      {
        property: "og:description",
        content:
          "A peaceful setting for weddings, celebrations, retreats and corporate gatherings.",
      },
      {
        property: "og:image",
        content: img9,
      },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  {
    icon: Heart,
    title: "Weddings",
    desc: "Create a memorable celebration with a beautiful setting for ceremonies, receptions and intimate gatherings.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    desc: "From intimate dinners to lively celebrations, create a special setting for birthdays and personal milestones.",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    desc: "Celebrate anniversaries, baby showers, family occasions and other meaningful moments with your loved ones.",
  },
  {
    icon: Users,
    title: "Retreats",
    desc: "A peaceful environment for wellness, spiritual, leadership and team retreats away from the usual routine.",
  },
  {
    icon: Presentation,
    title: "Conferences",
    desc: "A comfortable setting for meetings, presentations, workshops and professional gatherings.",
  },
  {
    icon: Briefcase,
    title: "Corporate Gatherings",
    desc: "Bring your team together for off-sites, planning sessions, board meetings and team-building activities.",
  },
];

function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="A setting that holds the moment — and the memory."
        image={event}
      />

      {/* Introduction */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Host With Us"
              title="Made for moments that matter"
            />

            <div className="mt-7 max-w-2xl space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At Adepa Heights Complex, your event becomes part of the
                experience. Whether you are planning an intimate celebration,
                a wedding, a retreat or a professional gathering, our setting
                provides a peaceful atmosphere for bringing people together.
              </p>

              <p>
                Located in the cool hills of Akuapem Mampong, the complex
                offers a refreshing environment away from the noise and
                pressure of the city.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-smooth hover:text-gold"
              >
                Discuss your event with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={img9}
              alt="Event setting at Adepa Heights Complex"
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/35 p-5 text-white backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                Adepa Heights
              </p>

              <p className="mt-2 font-display text-xl">
                Your gathering, beautifully placed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-muted/30 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="What We Host"
              title="A space for every kind of gathering"
            />

            <p className="mt-5 text-muted-foreground leading-relaxed">
              From personal celebrations to professional occasions, our event
              spaces can be arranged around the kind of experience you want
              to create.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-2xl text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-smooth group-hover:text-gold"
                  >
                    Enquire
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Planning CTA */}
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
              Plan Your Event
            </p>

            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Let&apos;s create something memorable
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              Tell us about your event, preferred date and requirements, and
              our team can help you explore the available options at Adepa
              Heights Complex.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-medium text-gold-foreground shadow-elegant transition-smooth hover:opacity-90"
              >
                <CalendarDays
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Enquire About Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}