import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/Components/NavBar";
import { Footer } from "@/Components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/Provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexium Assignment 2",
  description: "A blog summarizer app with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col h-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <NavBar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
