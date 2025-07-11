import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    img: {
      type: String,
      required: [true, "Image is required"],
    },
    url: {
      type: String,
      required: [true, "URL is required"],
      unique: true,
    },
    user: {
      type: String,
      required: false,
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
    },
    translation: {
      type: String,
      required: [true, "Translation is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
