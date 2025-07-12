import { GoogleGenerativeAI } from "@google/generative-ai";

// Summarizes blog text using Gemini 1.5 Flash
export const blogSum = async (text) => {
  try {
    // Get Gemini API key from environment
    const KEY = process.env.GEMINI_API_KEY;
    if (!KEY) {
      throw { status: 500, msg: "API Key Missing!" };
    }
    // Ensure the text is not too long for the model's input limit.
    // Limit input length for Gemini API
    const maxLength = 30000; // A safe character limit
    // Truncate text if too long
    const truncatedText =
      text.length > maxLength ? text.substring(0, maxLength) : text;

    // Initialize Gemini AI model
    const genAI = new GoogleGenerativeAI(KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Prompt for summary
    const prompt = `Please summarize the following text and return a max of 500 characters :\n\n${truncatedText}`;

    // Generate summary using Gemini
    const result = await model.generateContent(prompt);
    const response = result.response;
    const summary = response.text();

    return summary;
  } catch (err) {
    console.error("Error summarizing text:", err);
    throw { status: 500, msg: "Failed to summarize text.", error: err.message };
  }
};
