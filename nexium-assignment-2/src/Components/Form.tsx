"use client";

import toast from "react-hot-toast";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = (
      e.currentTarget.elements.namedItem("blog-url") as HTMLInputElement
    )?.value;
    if (url) {
      // Here you would typically handle the URL submission, e.g., send it to an API
      e.currentTarget.reset();
    } else {
      toast.error("Please enter a valid URL");
    }
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
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
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
      >
        Get Summary
      </button>
    </form>
  );
}
