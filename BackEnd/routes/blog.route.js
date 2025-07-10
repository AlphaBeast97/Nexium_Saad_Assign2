import { Router } from "express";
import { getAllSummaries, getOneSummary } from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getAllSummaries);
router.get("/:id", getOneSummary);

export default router;