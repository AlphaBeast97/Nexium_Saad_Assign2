import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Blog Summarizer
        </Link>
        <div>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-gray-700 hover:bg-gray-700 transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}