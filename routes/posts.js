import express from "express";
import { addAns, addPost, displayPost, getPosts } from "../controllers/posts.js";
const router = express.Router();

router.get("/post", getPosts)

router.post("/post",addPost)

router.post("/postpage",displayPost);

router.post("/postans",addAns);
export default router;