"use client";

// Provides theme context (light/dark) to the app
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps
  extends React.ComponentProps<typeof NextThemesProvider> {
  children: React.ReactNode;
}

// Wraps children with theme provider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
