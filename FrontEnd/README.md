# Blog Scraper & Summarizer Frontend

This is the frontend for the Blog Scraper & Summarizer web application, built with Next.js and TypeScript.

> Uses Gemini 1.5 Flash for AI-powered blog summarization and MyMemory API for translation.

## Features

- Submit a blog URL to scrape, summarize (using Gemini 1.5 Flash), and translate (using MyMemory API)
- View a list of all summarized blogs
- View details of a single blog summary
- Responsive UI with theme support (light/dark)
- Error and success notifications

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` — Main app routes and pages
- `src/Components/` — Reusable UI components
- `src/lib/` — API and utility functions
- `src/Provider/` — Theme provider

## API Integration

This frontend communicates with the backend API (see `../BackEnd/README.md`) for scraping, summarizing, and retrieving blog data. Configure the API base URL in `src/lib/api.ts` if needed.

## Customization

- Update styles in `src/app/globals.css` or component files.
- Add new features or pages in `src/app/` and `src/Components/`.

---

For backend setup and API documentation, see the `BackEnd/README.md` file.
