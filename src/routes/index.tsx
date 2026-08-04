import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { DomainsSection } from "@/components/landing/domains";
import { ProjectsSection } from "@/components/landing/projects";
import { PackagesSection } from "@/components/landing/packages";
import { UpdatesSection } from "@/components/landing/updates";
import { SupportSection } from "@/components/landing/support";
import { SiteFooter } from "@/components/landing/site-footer";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Devlooped — Moq & sharper .NET tools · devlooped.grok.me" },
      {
        name: "description",
        content:
          "Accelerating your dev loop through sharper tools. Open-source .NET libraries and tools from Devlooped — home of Moq, GitInfo, ThisAssembly, and more. Highlight site at devlooped.grok.me.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <DomainsSection />
        <ProjectsSection />
        <PackagesSection />
        <UpdatesSection />
        <SupportSection />
      </main>
      <SiteFooter />
    </div>
  );
}
