import { Router } from "express";
import { scrapeAndSaveBlog } from "../controllers/scrape.controller.js";

const router = Router();
router.post("/url", scrapeAndSaveBlog);

export default router;
