import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blog.route.js";
import scrapeRoute from "./routes/scrape.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

// Middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors());

// API routes
app.use("/api/blog/summary", blogRoutes);
app.use("/api/blog/scrape", scrapeRoute)

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});


const startServer = async () => {
  if (!MONGO_DB_URL) {
    console.error("Error: MONGO_DB_URL is not defined in the .env file.");
    process.exit(1);
  }
  try {
    // Connect to MongoDB 
    await mongoose.connect(MONGO_DB_URL);
    console.log("Connected to MongoDB!");

    // Start the server only after a successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

startServer();