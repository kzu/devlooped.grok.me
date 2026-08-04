import { ArrowUpRight } from "lucide-react";
import { recentUpdates, site } from "@/data/content";

export function UpdatesSection() {
  return (
    <section id="updates" className="border-b border-border">
      <div className="section-max section-pad py-14 sm:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
              Recent updates
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
              Releases and notes from the feed — shipping tools, skills, and
              experiments.
            </p>
          </div>
          <a
            href={site.x}
            target="_blank"
            rel="noreferrer"
            className="link-quiet inline-flex items-center gap-1 text-sm font-medium"
          >
            X · {site.xHandle}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>

        <ul className="space-y-3">
          {recentUpdates.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-bg-elevated/40 p-4 transition-colors hover:border-border-strong hover:bg-bg-elevated sm:flex-row sm:items-start sm:gap-6 sm:p-5"
              >
                <time
                  dateTime={item.date}
                  className="shrink-0 font-mono text-xs text-fg-subtle tabular"
                >
                  {item.date}
                </time>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] leading-relaxed text-fg">
                    {item.text}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-fg-subtle transition-colors group-hover:text-fg-muted">
                    View on X
                    <ArrowUpRight className="size-3" aria-hidden />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.x}
          target="_blank"
          rel="noreferrer"
          className="link-quiet mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
        >
          Follow {site.xHandle} on X
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </div>
    </section>
  );
}
