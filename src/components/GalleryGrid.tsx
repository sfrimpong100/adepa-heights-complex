export type GalleryItem = { src: string; alt: string; tall?: boolean };

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
      {items.map((item, i) => (
        <figure
          key={i}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-soft group"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full object-cover group-hover:scale-105 transition-smooth duration-700"
          />
        </figure>
      ))}
    </div>
  );
}
