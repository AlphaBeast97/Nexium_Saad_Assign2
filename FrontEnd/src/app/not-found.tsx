import Link from "next/link";
import toast from "react-hot-toast";

export default function NotFound() {
  toast.dismiss();
  toast.error("Page Not Found");
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] bg-background text-foreground px-4 text-center flex-grow">
      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md shadow-md hover:bg-primary/90 transition-colors">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
