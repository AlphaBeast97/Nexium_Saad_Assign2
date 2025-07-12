"use client";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { ExploreButton } from "./ExploreButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GetOneSummary } from "@/lib/api";
import axios from "axios";

export function Form() {
  const Router = useRouter();
  // Use the deployed API base URL (without /api/blog) for ping endpoint
  const PING_URL = "https://nexium-saad-assign2.onrender.com";

  useEffect(() => {
    axios.get(`${PING_URL}/ping`).catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement | null;
    const username =
      (form?.elements.namedItem("username") as HTMLInputElement)?.value || "";
    const url = (form?.elements.namedItem("blog-url") as HTMLInputElement)
      ?.value;
    if (url) {
      const generatingMessages = [
        "Connecting to the blog...",
        "Analyzing the content...",
        "Extracting key points...",
        "Crafting the perfect summary...",
        "Almost there...",
      ];

      let messageIndex = 0;
      const toastId = toast.loading(generatingMessages[messageIndex]);
      const intervalId = setInterval(() => {
        messageIndex = (messageIndex + 1) % generatingMessages.length;
        toast.loading(generatingMessages[messageIndex], { id: toastId });
      }, 2000);

      try {
        // Call backend to trigger scraping/summarization
        await GetOneSummary(url, username);
        // Always redirect after backend responds (even for new URLs)
        Router.push(
          `explore/summaries/${encodeURIComponent(
            url
          )}?user=${encodeURIComponent(username)}`
        );
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          toast.error("Blog not found or scraping endpoint missing (404)");
        } else {
          toast.error("Failed to fetch summary");
        }
      } finally {
        clearInterval(intervalId);
        toast.dismiss(toastId);
      }
      if (form) form.reset();
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
