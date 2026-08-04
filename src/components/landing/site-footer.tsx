import { site } from "@/data/content";

const links = [
  { href: site.github, label: "GitHub" },
  { href: site.nuget, label: "NuGet" },
  { href: site.x, label: "X" },
  { href: site.website, label: "devlooped.com" },
  { href: site.osmf, label: "OSMF" },
  { href: "https://github.com/sponsors/devlooped", label: "Sponsors" },
];

export function SiteFooter() {
  return (
    <footer className="section-max section-pad py-12 sm:py-14">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <img
              src={site.avatar}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full border border-border"
            />
            <div>
              <p className="font-display text-xl tracking-tight text-fg">
                {site.name}
              </p>
              <p className="text-sm text-fg-muted">{site.tagline}</p>
            </div>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link-quiet font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-10 max-w-2xl text-xs leading-relaxed text-fg-subtle">
        Unofficial highlight page for{" "}
        <a href={site.github} className="link-quiet">
          Devlooped
        </a>
        . Featured projects ranked by GitHub stars and NuGet downloads. Stats
        reflect public data from GitHub, NuGet, and X.
      </p>
    </footer>
  );
}
