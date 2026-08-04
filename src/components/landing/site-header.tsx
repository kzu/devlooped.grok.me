import { ThemeToggle } from "./theme-toggle";
import { site } from "@/data/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#packages", label: "Packages" },
  { href: "#updates", label: "Updates" },
  { href: "#support", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="section-max mx-auto flex h-14 items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-2.5 text-fg no-underline"
        >
          <img
            src={site.avatar}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full border border-border"
          />
          <span className="truncate text-sm font-medium tracking-tight">
            {site.name}
          </span>
        </a>

        <nav
          className="flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto sm:justify-center sm:gap-1"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-2 text-xs font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg sm:px-3 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg md:inline-flex"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
