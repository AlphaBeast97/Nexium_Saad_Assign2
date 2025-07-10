import Link from "next/link";
import { ThemeSelector } from "./ThemeSelector";
import { MobileNavMenu } from "./MobileNavMenu";

export function NavBar() {
  return (
    <nav className="bg-card/80 backdrop-blur border-b border-border p-4 transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-foreground text-lg font-bold">
          Blog Summarizer
        </Link>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium border border-border hover:bg-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium border border-border hover:bg-accent transition-colors"
          >
            About
          </Link>
          <ThemeSelector />
        </div>
        {/* Mobile menu button */}
        <MobileNavMenu />
      </div>
    </nav>
  );
}
