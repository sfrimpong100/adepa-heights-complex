import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl font-semibold">Adepa Heights Complex</h3>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75 leading-relaxed">
            A hidden getaway destination in the cool hills of Akuapem Mampong — apartment-style stays,
            a refreshing pool and elegant event spaces.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
            <MapPin className="h-4 w-4 text-gold" />
            {SITE.location}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/rooms" className="hover:text-gold transition-smooth">Rooms & Apartments</Link></li>
            <li><Link to="/facilities" className="hover:text-gold transition-smooth">Facilities</Link></li>
            <li><Link to="/events" className="hover:text-gold transition-smooth">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-smooth">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-smooth">Our Story</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold transition-smooth">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-smooth">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-gold" />
              <a href="#" className="hover:text-gold transition-smooth">@adepaheights</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-6 py-6 text-xs text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Adepa Heights Complex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
