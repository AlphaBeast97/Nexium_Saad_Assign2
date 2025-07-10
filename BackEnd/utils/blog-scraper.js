import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda";

export const scrapeBlog = async (url) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: executablePath || undefined,
    headless: chromium.headless,
    defaultViewport: chromium.defaultViewport,
  });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const result = await page.evaluate(() => {
      const title = document.querySelector("h1")?.innerText || "No Title Found";
      const paragraphs = Array.from(document.querySelectorAll("p"))
        .map((p) => p.innerText)
        .filter(Boolean)
        .join("\n\n");

      return { title, text: paragraphs };
    });

    await browser.close();
    return result;
  } catch (err) {
    console.error("Scraping failed:", err.message);
    await browser.close();
    throw err;
  }
};
