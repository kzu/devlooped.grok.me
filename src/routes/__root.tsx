import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { CreatedWithGrokBanner } from "@/components/created-with-grok-banner";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Devlooped — Moq & sharper .NET tools",
      },
      {
        name: "description",
        content:
          "Accelerating your dev loop through sharper tools. Open-source .NET libraries and tools from Devlooped — home of Moq, GitInfo, ThisAssembly, and more.",
      },
      { name: "theme-color", content: "#0a0a0b" },
      { property: "og:title", content: "Devlooped — Moq & sharper .NET tools" },
      {
        property: "og:description",
        content:
          "Accelerating your dev loop through sharper tools. Open-source .NET libraries and tools used across the ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@devlooped" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap",
      },
      {
        rel: "icon",
        href: "https://avatars.githubusercontent.com/u/61533818?s=64&v=4",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <CreatedWithGrokBanner />
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
