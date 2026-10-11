import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const search = Route.useSearch() as { room?: string };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState(search.room ?? "");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = SITE.whatsapp;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = [
      `Hello Adepa Heights Complex,`,
      ``,
      `I would like to make an enquiry.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Room: ${room || "Not specified"}`,
      `Message: ${
        message ||
        "I would like to know more about availability and booking."
      }`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Get in touch
            </p>

            <h1 className="mt-4 font-display text-5xl md:text-6xl">
              Contact Us
            </h1>

            <p className="mt-5 max-w-2xl text-primary-foreground/75 leading-relaxed">
              Have a question, need help choosing a room, or ready to make a
              booking? Get in touch with Adepa Heights Complex.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information + form */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Contact details
            </p>

            <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
              We would love to hear from you
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Reach out to us for room availability, bookings, events, or any
              other enquiries about Adepa Heights Complex.
            </p>

            <div className="mt-8 space-y-5">
              {/* Phone */}
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-smooth hover:shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Phone className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-primary">
                    {SITE.phone}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-smooth hover:shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-medium text-primary">
                    +233544665602
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-smooth hover:shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-primary">
                    {SITE.email}
                  </p>
                </div>
              </a>

              {/* Location - Clickable */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=5.903951472553966,-0.148355321921144"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-smooth hover:shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-primary">
                    {SITE.location}
                  </p>

                  <p className="mt-1 text-xs text-gold">
                    Get directions →
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Booking / enquiry form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                Reservations
              </p>

              <h2 className="mt-2 font-display text-3xl text-primary">
                Make an enquiry
              </h2>

              <p className="mt-3 text-sm text-muted-foreground">
                Send us your details and we will continue the conversation on
                WhatsApp.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                <p className="text-sm">
                  Your WhatsApp message has been prepared. Please complete the
                  conversation in WhatsApp.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    placeholder="+233..."
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="you@example.com"
                />
              </div>

              {/* Room */}
              <div>
                <label
                  htmlFor="room"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Room / apartment
                </label>

                <input
                  id="room"
                  type="text"
                  value={room}
                  onChange={(event) => setRoom(event.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="e.g. Standard — 1C2"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  placeholder="Tell us what you need..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-smooth hover:bg-primary/90"
              >
                <CalendarDays className="h-4 w-4" />
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Find us
            </p>

            <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">
              Our location
            </h2>

            <p className="mt-3 text-muted-foreground">
              Find Adepa Heights Complex in Mampong, Akuapem.
            </p>
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <iframe
              title="Adepa Heights Complex location"
              src="https://www.google.com/maps?q=5.903951472553966,-0.148355321921144&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Map footer */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" />
              {SITE.location}
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=5.903951472553966,-0.148355321921144"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}