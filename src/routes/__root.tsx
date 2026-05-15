import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { InquiryProvider } from "@/components/InquiryProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--cream)" }}>
      <div className="max-w-md text-center">
        <h1 style={{ fontSize: "5rem" }}>404</h1>
        <h2 className="mt-2" style={{ fontSize: "1.5rem" }}>Page not found</h2>
        <p className="mt-3" style={{ color: "var(--grey)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-6">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--cream)" }}>
      <div className="max-w-md text-center">
        <h2 style={{ fontSize: "1.75rem" }}>This page didn't load</h2>
        <p className="mt-2" style={{ color: "var(--grey)" }}>Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
      { title: "PROPVIA SOLUTIONS LTD — Property Maintenance, Management & Consultancy" },
      { name: "description", content: "Professional property maintenance, management, and business consultancy services across Ipswich and the UK." },
      { name: "author", content: "PROPVIA SOLUTIONS LTD" },
      { property: "og:title", content: "PROPVIA SOLUTIONS LTD — Property Maintenance, Management & Consultancy" },
      { property: "og:description", content: "Professional property maintenance, management, and business consultancy services across Ipswich and the UK." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PROPVIA SOLUTIONS LTD" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "PROPVIA SOLUTIONS LTD — Property Maintenance, Management & Consultancy" },
      { name: "twitter:description", content: "Professional property maintenance, management, and business consultancy services across Ipswich and the UK." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/835c4ead-4cbe-4567-9430-404c60ff144a/id-preview-73001dc5--4a8d539a-210c-4751-bdc7-f245f77039a7.lovable.app-1778822614527.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/835c4ead-4cbe-4567-9430-404c60ff144a/id-preview-73001dc5--4a8d539a-210c-4751-bdc7-f245f77039a7.lovable.app-1778822614527.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <InquiryProvider>
        <AnnouncementBar />
        <Header />
        <Outlet />
        <Footer />
        <MobileBottomNav />
      </InquiryProvider>
    </QueryClientProvider>
  );
}
