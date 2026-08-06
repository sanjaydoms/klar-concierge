import { destinationImage, gradientFor } from "@/lib/destinationImage";
import { countryFlag } from "@/lib/countryFlags";

/**
 * Full-width hero for a destination page. Uses the CI-fetched photo when
 * present; otherwise a deterministic brand gradient — deliberate, not broken.
 */
export function DestinationHero({
  slug,
  name,
  countryIso2,
}: {
  slug: string;
  name: string;
  countryIso2?: string;
}) {
  const image = destinationImage(slug);
  const flag = countryFlag(countryIso2);

  if (image) {
    return (
      <figure className="relative mt-4 overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.file}
          alt={image.alt}
          className="h-64 w-full object-cover sm:h-96"
          loading="eager"
          fetchPriority="high"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <figcaption className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {flag ? <span className="text-3xl sm:text-4xl">{flag}</span> : null}
            <span className="text-2xl font-bold text-white drop-shadow sm:text-3xl">{name}</span>
          </div>
          {image.credit ? (
            <span className="max-w-[40%] truncate text-[10px] text-white/70">{image.credit}</span>
          ) : null}
        </figcaption>
      </figure>
    );
  }
  return (
    <div
      aria-hidden
      className="mt-4 flex h-44 items-end overflow-hidden rounded-3xl p-5 sm:h-60"
      style={{ background: gradientFor(slug) }}
    >
      <div className="flex items-center gap-2.5">
        {flag ? <span className="text-3xl sm:text-4xl">{flag}</span> : null}
        <span className="text-2xl font-bold text-white/95 sm:text-3xl">{name}</span>
      </div>
    </div>
  );
}

/** Compact visual for cards and list rows, featuring the country flag badge. */
export function DestinationThumb({
  slug,
  name,
  countryIso2,
  className = "h-32",
}: {
  slug: string;
  name: string;
  countryIso2?: string;
  className?: string;
}) {
  const image = destinationImage(slug);
  const flag = countryFlag(countryIso2);

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.file}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-full w-full items-end p-3"
          style={{ background: gradientFor(slug) }}
        >
          <span className="text-sm font-semibold text-white/90">{name}</span>
        </div>
      )}
      {flag ? (
        <span
          aria-label={`Flag of ${name}`}
          className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-sm backdrop-blur-md"
        >
          {flag}
        </span>
      ) : null}
    </div>
  );
}

