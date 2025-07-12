import { GoogleGenerativeAI } from "@google/generative-ai";

export const blogSum = async (text) => {
  try {
    const KEY = process.env.GEMINI_API_KEY;
    if (!KEY) {
      throw { status: 500, msg: "API Key Missing!" };
    }
    // Ensure the text is not too long for the model's input limit.
    const maxLength = 30000; // A safe character limit
    const truncatedText =
      text.length > maxLength ? text.substring(0, maxLength) : text;

    const genAI = new GoogleGenerativeAI(KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Please summarize the following text and return a max of 500 characters :\n\n${truncatedText}`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const summary = response.text();

    return summary;
  } catch (err) {
    console.error("Error summarizing text:", err);
    throw { status: 500, msg: "Failed to summarize text.", error: err.message };
  }
};
