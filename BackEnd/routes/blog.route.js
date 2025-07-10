import { Router } from "express";
import { getBlog } from "../controllers/blog.controller.js";

const router = Router();

router.get("/:id", getBlog);

export default router;