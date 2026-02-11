import { Router } from "express";
import { createPost, getPosts } from "./post.controller";

const router = Router();

router.post("/", createPost);
router.get("/", getPosts);

export default router;
