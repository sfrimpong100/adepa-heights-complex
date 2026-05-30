import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/facilities", label: "Facilities" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-semibold text-primary">Adepa Heights</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Complex · Ghana</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth shadow-soft"
        >
          Book Your Stay
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border/60",
          open ? "max-h-[480px]" : "max-h-0",
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-6 py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary transition-smooth"
              activeProps={{ className: "text-primary bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Book Your Stay
          </Link>
          <a href={`tel:${SITE.phoneRaw}`} className="text-center text-xs text-muted-foreground pt-2">
            Call {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
