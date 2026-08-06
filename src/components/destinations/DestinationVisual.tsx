import { destinationImage, gradientFor } from "@/lib/destinationImage";

/**
 * Full-width hero for a destination page. Uses the CI-fetched photo when
 * present; otherwise a deterministic brand gradient — deliberate, not broken.
 */
export function DestinationHero({ slug, name }: { slug: string; name: string }) {
  const image = destinationImage(slug);
  if (image) {
    return (
      <figure className="relative mt-4 overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.file}
          alt={image.alt}
          className="h-56 w-full object-cover sm:h-80"
          loading="eager"
          fetchPriority="high"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <figcaption className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-4">
          <span className="text-2xl font-bold text-white drop-shadow sm:text-3xl">{name}</span>
          {image.credit ? (
            <span className="max-w-[50%] truncate text-[10px] text-white/70">{image.credit}</span>
          ) : null}
        </figcaption>
      </figure>
    );
  }
  return (
    <div
      aria-hidden
      className="mt-4 flex h-40 items-end overflow-hidden rounded-3xl p-5 sm:h-52"
      style={{ background: gradientFor(slug) }}
    >
      <span className="text-2xl font-bold text-white/95 sm:text-3xl">{name}</span>
    </div>
  );
}

/** Compact visual for cards and list rows. */
export function DestinationThumb({
  slug,
  name,
  className = "h-28",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const image = destinationImage(slug);
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.file}
        alt=""
        aria-hidden
        loading="lazy"
        className={`${className} w-full rounded-xl object-cover`}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={`${className} flex w-full items-end rounded-xl p-3`}
      style={{ background: gradientFor(slug) }}
    >
      <span className="text-sm font-semibold text-white/90">{name}</span>
    </div>
  );
}
