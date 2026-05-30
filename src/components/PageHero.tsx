export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end px-6 pb-14 text-primary-foreground">
        <span className="text-xs uppercase tracking-[0.3em] text-gold animate-fade-in">Adepa Heights</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl animate-fade-up">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-primary-foreground/85 animate-fade-up">{subtitle}</p>}
      </div>
    </section>
  );
}
