"use client";

import toast from "react-hot-toast";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = (e.currentTarget.elements.namedItem("blog-url") as HTMLInputElement)?.value;
    if (url) {
      // Here you would typically handle the URL submission, e.g., send it to an API
      e.currentTarget.reset();
    } else {
      toast.error("Please enter a valid URL");
    }
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="blog-url" className="block text-gray-700 mb-1"></label>
      <input
        type="url"
        id="blog-url"
        name="blog-url"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="https://example.com/blog-post"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Get Summary
      </button>
    </form>
  );
}
