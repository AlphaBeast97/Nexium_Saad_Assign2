import { blogSum } from "../utils/blog-summery.js";

export const summarizeBlog = async (text) => {
  try {
    const summary = await blogSum(text);
    return summary;
  } catch (err) {
    throw { status: 500, msg: "Failed to summarize text.", error: err.message };
  }
};
