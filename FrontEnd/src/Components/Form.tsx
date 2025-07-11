"use client";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { ExploreButton } from "./ExploreButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Form() {
  const Router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username =
      (e.currentTarget.elements.namedItem("username") as HTMLInputElement)
        ?.value || "";

    const url = (
      e.currentTarget.elements.namedItem("blog-url") as HTMLInputElement
    )?.value;
    if (url && username) {
      toast.loading("Generating Summary!");
      try {
        const request = {url: url, user: username};
        Router.push(`/summaries/${request}`); // <-- redirect to /summary page
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        toast.error("Failed to fetch summary");
      }
      e.currentTarget.reset();
    } else {
      toast.error("Please enter a valid URL");
    }
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <label
        htmlFor="username"
        className="block text-muted-foreground mb-1"
      ></label>
      <input
        type="username"
        id="username"
        name="username"
        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground transition-colors"
        placeholder="User Name (optional)"
      />
      <label
        htmlFor="blog-url"
        className="block text-muted-foreground mb-1"
      ></label>
      <input
        type="url"
        id="blog-url"
        name="blog-url"
        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground transition-colors"
        placeholder="https://example.com/blog-post"
        required
      />
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        <Button type="submit">Get Summary</Button>
        <Link href="/explore">
          <ExploreButton>Explore!</ExploreButton>
        </Link>
      </div>
    </form>
  );
}
