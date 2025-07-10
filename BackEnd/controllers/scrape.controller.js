import { scrapeBlog } from "../utils/blog-scraper.js";
import { Blog } from "../models/blog.model.js";
export const scrapeAndSaveBlog = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ message: "URL is required" });

  try {
    const { title, text } = await scrapeBlog(url);
    const saved = await Blog.create({ title, text });
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to scrape blog", error: error.message });
  }
};
