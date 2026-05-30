import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { SITE } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import views from "@/assets/views.jpg";

type Search = { room?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    room: typeof s.room === "string" ? s.room : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book Your Stay — Adepa Heights Complex" },
      { name: "description", content: "Reserve your apartment, suite or event space at Adepa Heights Complex via WhatsApp, call or our booking form." },
      { property: "og:title", content: "Book Your Stay — Adepa Heights" },
      { property: "og:description", content: "Get in touch to plan your getaway in Akuapem Mampong." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { room } = Route.useSearch();

  return (
    <>
      <PageHero title="Book Your Stay" subtitle="Send us a few details and we'll confirm on WhatsApp." image={views} />

      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
          <h2 className="font-display text-3xl text-primary">Booking enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">All bookings are confirmed via WhatsApp.</p>
          <div className="mt-8">
            <BookingForm defaultRoom={room} />
          </div>
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 rounded-2xl bg-primary text-primary-foreground p-6 shadow-soft hover:shadow-elegant transition-smooth"
          >
            <div className="h-12 w-12 rounded-full bg-gold/20 inline-flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">WhatsApp</div>
              <div className="font-display text-xl">Chat with us</div>
            </div>
          </a>

          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-4 rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant transition-smooth"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-gold inline-flex items-center justify-center text-gold-foreground">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">Call us</div>
              <div className="font-display text-xl text-primary">{SITE.phone}</div>
            </div>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-4 rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant transition-smooth"
          >
            <div className="h-12 w-12 rounded-full bg-secondary inline-flex items-center justify-center text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">Email</div>
              <div className="font-display text-lg text-primary">{SITE.email}</div>
            </div>
          </a>

          <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
            <div className="flex items-center gap-3 text-primary">
              <MapPin className="h-5 w-5 text-gold" />
              <span className="font-display text-lg">Location</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{SITE.location}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              A scenic weekend getaway from Accra.
            </p>
          </div>
        </aside>
      </section>

      {/* MAP */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-elegant border border-border aspect-[16/9]">
          <iframe
            title="Map — Akuapem Mampong"
            src="https://www.google.com/maps?q=Akuapem+Mampong,+Eastern+Region,+Ghana&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
