import { ArrowUpRight, Star } from "lucide-react";
import { featuredProjects, moreProjects, site } from "@/data/content";
import { formatCompact } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="work" className="border-b border-border">
      <div className="section-max section-pad py-14 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
            Ranked by GitHub stars and nuget.org downloads — the libraries and
            tools with the broadest real-world impact.
          </p>
        </div>

        <ol className="space-y-3">
          {featuredProjects.map((project) => (
            <li key={project.repo}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 rounded-2xl border border-border bg-bg-elevated/40 p-4 transition-colors duration-150 hover:border-border-strong hover:bg-bg-elevated sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start sm:gap-5 sm:p-5"
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="font-mono text-xs text-fg-subtle tabular">
                    #{project.rank}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-medium text-fg group-hover:text-accent">
                      {project.name}
                    </span>
                    <span className="truncate font-mono text-xs text-fg-subtle">
                      {project.repo}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg-muted tabular">
                    <Star className="size-3" aria-hidden />
                    {formatCompact(project.stars)}
                  </span>
                  {project.downloadsLabel ? (
                    <span className="font-mono text-xs text-fg-subtle tabular">
                      {project.downloadsLabel} dl
                    </span>
                  ) : null}
                </div>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h3 className="font-display text-2xl tracking-tight text-fg">
            More projects
          </h3>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {moreProjects.map((project) => (
              <li key={project.repo}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 py-4 transition-colors sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_auto] sm:items-center sm:gap-4"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-medium text-fg group-hover:text-accent">
                        {project.name}
                      </span>
                      <span className="font-mono text-xs text-fg-subtle">
                        {project.repo}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-fg-subtle">
                      <span className="inline-flex items-center gap-1 tabular">
                        <Star className="size-3" aria-hidden />
                        {formatCompact(project.stars)}
                      </span>
                      {project.downloadsLabel ? (
                        <span className="tabular">{project.downloadsLabel} dl</span>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>
                  <div className="hidden sm:block">
                    <ArrowUpRight className="size-4 text-fg-subtle transition-colors group-hover:text-fg" />
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="link-quiet inline-flex items-center gap-1 font-medium"
            >
              GitHub org
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
            <a
              href={site.nuget}
              target="_blank"
              rel="noreferrer"
              className="link-quiet inline-flex items-center gap-1 font-medium"
            >
              All packages
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
