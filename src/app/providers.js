"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import { ProjectsContextProvider } from "@/contexts/ProjectsContext";
import { TimerContextProvider } from "@/contexts/TimerContext";

export function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <ProjectsContextProvider>
            <TimerContextProvider>{children}</TimerContextProvider>
          </ProjectsContextProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
