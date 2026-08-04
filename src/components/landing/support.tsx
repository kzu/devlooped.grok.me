import { ArrowUpRight, Heart } from "lucide-react";
import { site } from "@/data/content";

export function SupportSection() {
  return (
    <section id="support" className="border-b border-border">
      <div className="section-max section-pad py-14 sm:py-16">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-bg-elevated">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:p-10">
            <div>
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full border border-border bg-bg">
                <Heart className="size-4 text-fg-muted" aria-hidden />
              </div>
              <h2 className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
                Support the loop
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted">
                Rather than per-project licensing, Devlooped offers the Open
                Source Maintenance Fee — one path that covers current and future
                libraries and tools. If a package does not include the OSMF
                EULA, you are not bound by it at all.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={site.osmf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  Open Source Maintenance Fee
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
                <a
                  href={site.sponsors}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-bg px-5 text-sm font-medium"
                >
                  GitHub Sponsors
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-bg p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                Why it matters
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-fg-muted">
                <li>One maintenance fee covers the whole Devlooped family.</li>
                <li>
                  Keeps Moq, GitInfo, ThisAssembly, and the long tail of tools
                  maintained.
                </li>
                <li>
                  Packages without the OSMF EULA stay fully unbound by it.
                </li>
              </ul>
              <a
                href="mailto:info@devlooped.com"
                className="link-quiet mt-5 inline-flex items-center gap-1 text-sm font-medium"
              >
                {site.email}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
