export const metadata = {
  title: "Explore Blogs | Nexium Assignment 2",
  description:
    "Browse and discover summarized blogs on a variety of topics. Powered by Next.js, Node.js, MongoDB, and AI.",
};
export const dynamic = "force-dynamic";

import { BlogCards } from "@/Components/BlogCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { GetAllSummaries } from "@/lib/api";
import { ExploreButton } from "@/Components/ExploreButton";
import Link from "next/link";

// Ensure this page is always rendered dynamically (never statically at build time)
export default async function Explore() {
  let Summaries = [];
  let error = null;
  try {
    Summaries = await GetAllSummaries();
  } catch {
    error = "Failed to load blog summaries. Please try again later.";
  }
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-120px)] p-4">
      <Card className="w-full max-w-6xl shadow-xl border bg-card">
        <CardHeader className="pb-4 flex flex-row justify-between items-center">
          <CardTitle className="text-4xl font-bold text-foreground">
            Explore Blogs
          </CardTitle>
          <Link href="/">
            <ExploreButton className="border border-accent-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
              Home
            </ExploreButton>
          </Link>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : (
            <BlogCards blogs={Summaries} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
