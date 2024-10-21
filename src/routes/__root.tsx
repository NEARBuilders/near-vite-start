import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Link,
  Outlet,
  createRootRouteWithContext
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/header";
import NearProvider from "@/contexts/near";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>404 not found</p>
        <Link to="/">Go home</Link>
      </div>
    );
  }
});

function RootComponent() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NearProvider>
          <div className="min-h-screen">
            <Header />

            <main className="container mx-auto px-4 py-8">
              <Outlet />
            </main>
          </div>
        </NearProvider>
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <TanStackRouterDevtools position="bottom-right" />
      </ThemeProvider>
    </>
  );
}
