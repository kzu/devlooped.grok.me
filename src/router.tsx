import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AppErrorComponent } from "./lib/error-component";

function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="font-display text-4xl tracking-tight">404</p>
      <p className="text-fg-muted">That page is not on this site.</p>
      <a
        href="/"
        className="rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-bg-hover"
      >
        Back home
      </a>
    </div>
  );
}

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFoundPage,
    scrollRestoration: true,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
