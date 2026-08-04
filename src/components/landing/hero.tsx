import { ArrowUpRight, MapPin } from "lucide-react";
import { site, stats } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-wash border-b border-border"
    >
      <div className="pointer-events-none absolute inset-0 grid-hairline opacity-60" />
      <div className="section-max relative section-pad pb-14 pt-12 sm:pb-16 sm:pt-16">
        <p className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-fg-muted">
          <span className="font-medium text-fg">Open source</span>
          <span className="text-fg-subtle">·</span>
          <span>Creator of Moq & a large .NET tooling family</span>
        </p>

        <p className="mb-2 font-mono text-xs text-fg-subtle">
          aka <span className="text-fg-muted">{site.pronunciation}</span>
        </p>

        <h1 className="font-display text-[clamp(2.75rem,7vw,4.25rem)] font-normal leading-[1.02] tracking-tight text-fg text-balance">
          {site.name}
        </h1>

        <p className="mt-3 max-w-2xl font-display text-2xl tracking-tight text-fg-muted sm:text-3xl">
          {site.tagline}
        </p>

        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-fg-muted">
          {site.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-fg-subtle">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden />
            {site.location}
          </span>
          <span className="text-fg-subtle/60">·</span>
          <a
            href={site.website}
            target="_blank"
            rel="noreferrer"
            className="link-quiet inline-flex items-center gap-1 font-medium"
          >
            devlooped.com
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            GitHub
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
          <a
            href={site.nuget}
            target="_blank"
            rel="noreferrer"
            className="link-quiet inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-5 text-sm font-medium"
          >
            NuGet profile
          </a>
          <a
            href={site.x}
            target="_blank"
            rel="noreferrer"
            className="link-quiet inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-5 text-sm font-medium"
          >
            Follow on X
          </a>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-bg-elevated/60 p-4 sm:p-5"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-3xl tracking-tight text-fg sm:text-4xl tabular">
                {item.value}
              </dd>
              <p className="mt-1 text-xs text-fg-subtle">{item.detail}</p>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-fg-subtle">
          Open source
        </p>
      </div>
    </section>
  );
}
