import type { LucideIcon } from "lucide-react";

export function FacilityCard({
  icon: Icon,
  title,
  description,
  image,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
          />
        </div>
      )}
      <div className="p-6">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-display text-xl text-primary">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
