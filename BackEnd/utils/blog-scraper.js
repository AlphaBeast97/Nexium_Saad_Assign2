import puppeteer from "puppeteer";

// Scrapes blog content from a given URL using Puppeteer
export const scrapeBlog = async (url) => {
  // Launch headless browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--single-process",
      "--no-zygote",
    ],
  });
  // Open new page
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    const result = await page.evaluate(() => {
      const title = document.querySelector("h1")?.innerText || "No Title Found";
      const paragraphs = Array.from(document.querySelectorAll("p"))
        .map((p) => p.innerText)
        .filter(Boolean)
        .join("\n\n");

      const ogImage = document.querySelector('meta[property="og:image"]');
      const firstImageInArticle = document.querySelector("article img");

      const image = ogImage
        ? ogImage.content
        : firstImageInArticle
        ? firstImageInArticle.src
        : null;

      return { title, text: paragraphs, image };
    });

    return result;
  } catch (err) {
    console.error("Scraping failed:", err.message);
    throw err;
  } finally {
    await browser.close();
  }
};
