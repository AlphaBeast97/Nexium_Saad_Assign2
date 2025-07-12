# Nexium_Saad_Assign2

Blog Scraper & Summarizer — Full Stack Project

> Uses Gemini 1.5 Flash for AI-powered blog summarization and MyMemory API for translation.

## Overview

This repository contains a full stack web application for scraping blog posts, generating AI-powered summaries (using Gemini 1.5 Flash), and providing translations (using MyMemory API). The project is divided into two main parts:

- **BackEnd**: Node.js/Express API for scraping, summarizing, translating, and storing blog data in MongoDB.
- **FrontEnd**: Next.js (TypeScript) web app for submitting URLs, viewing summaries, and interacting with the API.

---

## Features

- Scrape blog posts from a given URL
- AI-powered blog summarization using Gemini 1.5 Flash
- Translate summaries (e.g., to Urdu) using MyMemory API
- Store and retrieve blog posts, summaries, and translations
- Prevent duplicate scraping of the same URL
- View all blog summaries and details in the frontend
- Responsive UI with theme support
- Error and success notifications

---

## Project Structure

```
.
├── BackEnd/      # Express API server
├── FrontEnd/     # Next.js frontend app
└── README.md     # Project overview (this file)
```

---

## Getting Started

### Backend Setup

1. Go to the `BackEnd` directory:
   ```bash
   cd BackEnd
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (see `.env.example`) and add your MongoDB connection string:
   ```env
   MONGO_DB_URL="your_mongodb_connection_string"
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The server runs on `http://localhost:3001` by default.

### Frontend Setup

1. Go to the `FrontEnd` directory:
   ```bash
   cd FrontEnd
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The app runs on `http://localhost:3000` by default.

---

## Usage

1. Open the frontend in your browser at [http://localhost:3000](http://localhost:3000).
2. Submit a blog URL to scrape, summarize, and translate.
3. View all blog summaries or details for a single blog.

---

## API Documentation

See `BackEnd/README.md` for detailed API endpoints, request/response formats, and error handling.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is for educational purposes.
