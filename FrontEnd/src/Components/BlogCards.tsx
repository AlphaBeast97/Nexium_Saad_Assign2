import * as React from "react";
import Link from "next/link";

import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

// Define the type for a single blog post.
interface Blog {
  _id: string;
  title: string;
  text: string;
  img: string;
  url: string;
  summary: string;
  translation: string;
  createdAt: string;
}

// The props for the BlogCards component now expect an array of blogs.
interface BlogCardsProps {
  blogs: Blog[];
}

export function BlogCards({ blogs }: BlogCardsProps) {
  // Handle the case where there are no blogs to display.
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-16">
        <h3 className="text-xl font-semibold">No Summaries Yet</h3>
        <p className="mt-2 text-sm">
          It looks like there are no summaries to display.
        </p>
        <Link href="/" className="mt-4 inline-block">
          <Button>Create Your First Summary</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {blogs.slice(0, 10).map((blog) => (
        <Card
          key={blog._id}
          className="flex flex-col overflow-hidden rounded-lg border border-accent bg-background text-card-foreground shadow-md hover:shadow-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out"
        >
          {blog.img && (
            <Image
              src={blog.img}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
              placeholder="empty"
            />
          )}
          <CardHeader>
            <CardTitle
              className="text-xl font-semibold leading-tight truncate"
              title={blog.title}
            >
              {blog.title}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <Link
              href={`explore/summaries/${encodeURIComponent(
                blog.url
              )}?user=${encodeURIComponent(blog._id)}`}
              className="w-full"
            >
              <Button className="w-full">View Summary</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
