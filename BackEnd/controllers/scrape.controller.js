import { scrapeBlog } from "../utils/blog-scraper.js";
import { Blog } from "../models/blog.model.js";
import { summarizeBlog } from "./summary.controller.js";
import { translateSummary } from "../utils/summary-translate.js";
export const scrapeAndSaveBlog = async (req, res) => {
  const { url, user } = req.body;
  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    // Check if a blog with this URL already exists in the database
    const existingBlog = await Blog.findOne({ url });

    // If it exists, return the existing blog data
    if (existingBlog) {
      console.log(`URL already exists, returning existing blog: ${url}`);
      return res.status(200).json({ id: existingBlog._id });
    }

    // If it doesn't exist, proceed with scraping
    console.log(`Scraping new URL: ${url}`);
    const { title, text } = await scrapeBlog(url);

    let summary = null;
    let translation = null;

    if (title || text) {
      summary = await summarizeBlog(text);
      if (summary) {
        translation = await translateSummary(summary);
      }
    }

    // Create and save the new blog post
    const newBlog = await Blog.create({
      title,
      text,
      url,
      user,
      summary,
      translation,
    });
    res.status(201).json({ id: newBlog._id });
  } catch (error) {
    console.error("Error in scrapeAndSaveBlog:", error);
    res.status(500).json({
      message: "Failed to scrape and save the blog post.",
      error: error.message,
    });
  }
};
