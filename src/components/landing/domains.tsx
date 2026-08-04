import { domains } from "@/data/content";

export function DomainsSection() {
  return (
    <section className="border-b border-border bg-bg-elevated/30">
      <div className="section-max section-pad py-14 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
            Where the tools land
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
            Some are well established, others niche, some large and some small —
            all built to sharpen the day-to-day developer loop.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {domains.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-border bg-bg p-5 sm:p-6"
            >
              <h3 className="text-sm font-medium tracking-tight text-fg">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
