"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import { ProjectsContextProvider } from "@/contexts/ProjectsContext";
import { TimerContextProvider } from "@/contexts/TimerContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "@/contexts/authContext";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important so we don't re-make a new client if React
    // supsends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

// NOTE: Avoid useState when initializing the query client if you don't
//       have a suspense boundary between this and the code that may
//       suspend because React will throw away the client on the initial
//       render if it suspends and there is no boundary

export function Providers({ children, session }) {
  const queryClient = getQueryClient();
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
              <ProjectsContextProvider>
                <TimerContextProvider>{children}</TimerContextProvider>
              </ProjectsContextProvider>
            </QueryClientProvider>
          </AuthContextProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
