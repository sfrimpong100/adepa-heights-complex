export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
