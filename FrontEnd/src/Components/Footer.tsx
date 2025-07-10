export function Footer() {
  return (
    <footer className="bg-card/80 backdrop-blur border-t border-border py-4 transition-colors text-muted-foreground dark:text-foreground">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blog Summarizer. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Created by{" "}
          <a
            href="https://github.com/AlphaBeast97"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 text-primary dark:text-primary-foreground hover:text-accent dark:hover:text-accent transition-colors"
          >
            Muhammad Saad Khan
          </a>{" "}
          for Nexium Internship Assignment 2
        </p>
      </div>
    </footer>
  );
}
