import Link from "next/link";
import { KlarLogo } from "@/components/brand/KlarLogo";

const NAV = [
  { href: "/concierge", label: "Plan a Holiday" },
  { href: "/holidays", label: "Holiday Types" },
  { href: "/concierge/discover", label: "Discover" },
  { href: "/destinations", label: "Destinations" },
  { href: "/concierge/compare", label: "Compare" },
  { href: "/concierge/how-it-works", label: "How It Works" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface shadow-sm print:hidden">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Klar Concierge home">
          <KlarLogo height={30} priority />
          <span className="hidden text-sm font-semibold tracking-wide text-brand sm:inline">
            Concierge
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="btn-quiet">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/concierge" className="btn-primary whitespace-nowrap px-5 text-sm">
          Plan My Holiday
        </Link>
      </div>
      {/* Mobile: the same navigation, always reachable — no dead ends on phones */}
      <nav
        aria-label="Main mobile"
        className="flex gap-1 overflow-x-auto border-t border-line px-2 py-1.5 md:hidden"
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-brand"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
