export function Footer() {
  return (
    <footer className="bg-background border-t border-border text-muted-foreground py-4 transition-colors">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blog Summarizer. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Created by{" "}
          <a
            href="https://github.com/AlphaBeast97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Muhammad Saad Khan
          </a>{" "}
          for Nexium Internship Assignment 2
        </p>
      </div>
    </footer>
  );
}
