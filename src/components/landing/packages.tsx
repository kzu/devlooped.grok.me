import { ArrowUpRight } from "lucide-react";
import { packages, site } from "@/data/content";

export function PackagesSection() {
  return (
    <section id="packages" className="border-b border-border">
      <div className="section-max section-pad py-14 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
            Packages that ship
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
            Libraries and tools under the Devlooped ecosystem on nuget.org —
            led by Moq with over a billion downloads.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="hidden border-b border-border bg-bg-subtle/50 px-5 py-3 text-xs font-medium uppercase tracking-wider text-fg-subtle sm:grid sm:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)_auto] sm:gap-4">
            <span>Package</span>
            <span>About</span>
            <span className="text-right">Downloads</span>
          </div>
          <ul>
            {packages.map((pkg, i) => (
              <li
                key={pkg.name}
                className={
                  i < packages.length - 1 ? "border-b border-border" : undefined
                }
              >
                <a
                  href={pkg.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-1 px-4 py-4 transition-colors hover:bg-bg-elevated sm:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)_auto] sm:items-center sm:gap-4 sm:px-5"
                >
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <span className="font-medium text-fg group-hover:text-accent">
                      {pkg.name}
                    </span>
                    {pkg.flagship ? (
                      <span className="rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                        flagship
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {pkg.about}
                  </p>
                  <span className="font-mono text-sm font-medium text-fg tabular sm:text-right">
                    {pkg.downloadsLabel}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={site.nuget}
          target="_blank"
          rel="noreferrer"
          className="link-quiet mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
        >
          All packages on nuget.org
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </div>
    </section>
  );
}
