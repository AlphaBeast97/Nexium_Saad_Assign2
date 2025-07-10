import { dictionary } from "./dictionary.js";
export const translateSummary = async (summary) => {
  try {
    const words = summary.split(" ");
    const translatedWords = words.map((word) => {
      const lowerCaseWord = word.toLowerCase();
      return dictionary[lowerCaseWord] || word;
    });
    return translatedWords.join(" ");
  } catch (err) {
    throw {
      status: 500,
      msg: "Failed to translate summary.",
      error: err.message,
    };
  }
};
