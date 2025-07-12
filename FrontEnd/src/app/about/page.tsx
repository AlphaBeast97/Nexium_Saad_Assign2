export const metadata = {
  title: "About | Nexium Assignment 2",
  description:
    "Learn about the Nexium Assignment 2 project, its tech stack, and the team behind the blog summarizer app.",
};

import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center items-center bg-background py-8 px-2 min-h-screen transition-colors">
      <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-10 max-w-xl w-full flex flex-col items-center mx-auto border border-border transition-colors">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-6">
          Welcome to Blog Summarizer! This project is designed to help you
          quickly grasp the key points of any blog post by generating clear,
          concise summaries from the provided URLs. Save time and stay informed
          with ease.
        </p>
        <div className="mb-6 w-full">
          <h2 className="text-lg font-semibold text-foreground mb-2 text-center">
            Major Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                width={40}
                height={40}
                className="h-10 w-10 mb-1"
                unoptimized
              />
              <span className="text-xs text-muted-foreground">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/tailwind.svg"
                alt="Tailwind CSS"
                width={40}
                height={40}
                className="h-10 w-10 mb-1"
                unoptimized
              />
              <span className="text-xs text-muted-foreground">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                width={40}
                height={40}
                className="h-10 w-10 mb-1"
                unoptimized
              />
              <span className="text-xs text-muted-foreground">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                width={40}
                height={40}
                className="h-10 w-10 mb-1"
                unoptimized
              />
              <span className="text-xs text-muted-foreground">MongoDB</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full justify-center mt-2">
          <a
            href="https://github.com/AlphaBeast97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-base font-medium rounded-lg px-5 py-2 bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 text-white shadow-lg hover:from-blue-700 hover:via-blue-900 hover:to-indigo-950 transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            My GitHub Profile
          </a>
          <a
            href="https://github.com/AlphaBeast97/Nexium_Saad_Assign2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-base font-medium rounded-lg px-5 py-2 bg-gradient-to-br from-cyan-200 via-blue-300 to-blue-500 text-blue-900 shadow-lg hover:from-cyan-300 hover:via-blue-400 hover:to-blue-600 transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            Project Repository
          </a>
        </div>
      </div>
    </div>
  );
}
