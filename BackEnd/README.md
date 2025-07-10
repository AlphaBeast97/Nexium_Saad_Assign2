# Blog Scraper & Summarizer API

This is the backend service for a web application that scrapes blog posts, summarizes them, and provides translations.

## Features

- Scrape blog post content from a given URL.
- Summarize the scraped content.
- Translate the summary.
- Store and retrieve blog post data from a MongoDB database.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB

### Installation & Setup

1.  Clone the repository.
2.  Navigate to the `BackEnd` directory:
    ```bash
    cd BackEnd
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the `BackEnd` directory and add your MongoDB connection string. You can use the `.env.example` file as a template.

    ```
    MONGO_DB_URL="your_mongodb_connection_string"
    ```

5.  Start the server:
    ```bash
    npm start
    ```

The server will be running on `http://localhost:3001` (or the port specified in your configuration).

---

## API Endpoints

### Blog Endpoints

#### 1. Get All Blog Summaries

- **URL:** `/api/blogs/summary`
- **Method:** `GET`
- **Description:** Retrieves a list of all saved blog summaries.
- **Success Response (200 OK):**
  ```json
  [
    {
      "_id": "60d0fe4f5311236168a109ca",
      "title": "Example Blog Post",
      "text": "This is the full text of the blog post...",
      "url": "http://example.com/blog/post1",
      "user": "user123",
      "summary": "This is a summary of the blog post.",
      "translation": "یہ بلاگ پوسٹ کا خلاصہ ہے۔",
      "createdAt": "2023-01-01T12:00:00.000Z",
      "updatedAt": "2023-01-01T12:00:00.000Z"
    }
  ]
  ```

#### 2. Get a Single Blog Summary

- **URL:** `/api/blogs/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id=[string]` (Required): The ID of the blog post.
- **Success Response (200 OK):**
  - The same JSON structure as a single object from the "Get All Blog Summaries" endpoint.
- **Error Responses:**
  - `400 Bad Request`: `{ "message": "Invalid Blog ID format" }`
  - `404 Not Found`: `{ "message": "Blog not found" }`

### Scrape Endpoint

#### 1. Scrape and Save a New Blog Post

- **URL:** `/api/scrape`
- **Method:** `POST`
- **Description:** Scrapes a blog post from a given URL, summarizes it, translates the summary, and saves it to the database. If the URL has already been scraped, it returns the existing data.
- **Body:**
  ```json
  {
    "url": "https://example.com/blog/some-article",
    "user": "optional-user-identifier"
  }
  ```
- **Success Response (201 Created or 200 OK):**
  - Returns the full blog document, including the generated `summary` and `translation`.
- **Error Responses:**
  - `400 Bad Request`: `{ "message": "URL is required" }`
  - `500 Internal Server Error`: `{ "message": "Failed to scrape and save the blog post.", "error": "<error_details>" }`
