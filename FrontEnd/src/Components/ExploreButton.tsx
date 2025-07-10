import { Button } from "./ui/button";

interface ExploreButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ExploreButton({
  children,
  className,
}: ExploreButtonProps) {
  return (
    <Button
      variant="link"
      className={`w-full border-2 border-accent-foreground hover:bg-accent-foreground hover:text-background ${
        className || ""
      }`}
    >
      {children}
    </Button>
  );
}
