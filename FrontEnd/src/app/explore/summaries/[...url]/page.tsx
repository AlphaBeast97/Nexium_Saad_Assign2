import { GetOneSummary } from "@/lib/api";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/Components/ui/button";
import SummaryToastClientWrapper from "@/Components/SummaryPageToast";

export const metadata = {
  title: "Nexium Assignment 2",
  description: "View a blog summary",
};

interface SummaryPageProps {
  params: Promise<{ url: string[] }>;
  searchParams: Promise<{ user?: string }>;
}

// Define the expected structure of a single summary object.
interface Summary {
  _id: string;
  text: string;
  title: string;
  url: string;
  user: string;
  summary: string;
  translation: string;
  createdAt: string;
}

/**
 * A dynamic server component that fetches and displays a single blog summary.
 * It uses the `id` from the URL to fetch the specific data.
 */
export default async function SummaryPage({
  params,
  searchParams,
}: SummaryPageProps) {
  let summary: Summary;

  const currentParams = await params;
  const currentSearchParams = await searchParams;

  const encodedPathUrl = currentParams.url.join("/");
  const originalUrl = decodeURIComponent(encodedPathUrl);

  const user = currentSearchParams.user || "";
  try {
    // Fetch the summary data from the API using the provided ID.
    summary = await GetOneSummary(originalUrl, user || "");
  } catch (error) {
    // If the API call fails (e.g., returns a 404), trigger Next.js's not-found mechanism.
    console.log(error);
    notFound();
  }
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 min-h-[calc(100vh-120px)]">
      <SummaryToastClientWrapper />
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/explore">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Explore
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-lg border border-border">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
            {summary.title}
          </CardTitle>
          <CardDescription className="pt-2">
            <a
              href={summary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              View Original Article <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-10">

          <div>
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
              Summary
            </h3>
            <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
              {summary.summary}
            </p>
          </div>

          {summary.translation && (
            <div>
              <h3 className="text-xl font-semibold mb-3 border-b pb-2">
                Translation (Urdu)
              </h3>
              <p
                className="text-foreground/90 leading-relaxed whitespace-pre-wrap font-sans"
                dir="rtl"
              >
                {summary.translation}
              </p>
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">
              Full Blog Text
            </h3>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {summary.text || "No full blog text available."}
            </p>
          </div>
        </CardContent>

        <CardFooter className="text-xs text-muted-foreground bg-muted/50 py-3 px-6 border-t flex justify-between flex-wrap gap-2">
          <p>
            Generated on:{" "}
            {summary.createdAt
              ? new Date(summary.createdAt).toLocaleDateString()
              : "Unknown date"}
          </p>
          <p>
            By:{" "}
            <span className="font-medium text-foreground">
              {summary.user || "Anonymous"}
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
