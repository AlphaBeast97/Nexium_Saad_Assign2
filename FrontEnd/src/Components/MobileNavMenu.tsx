"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeSelector } from "./ThemeSelector";

export function MobileNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex items-center px-2 py-1 border border-border rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 z-50 w-48 bg-card border border-border rounded-lg shadow-lg flex flex-col p-2 md:hidden animate-in fade-in slide-in-from-top-2 transition-colors">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium border border-border hover:bg-accent transition-colors mb-1"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium border border-border hover:bg-accent transition-colors mb-1"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <div className="px-3 py-2 flex justify-center">
            <ThemeSelector />
          </div>
        </div>
      )}
    </>
  );
}
