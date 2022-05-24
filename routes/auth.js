import express from "express";
import { postLogin, postRegister, logOut } from "../controllers/auth.js";
const router = express.Router();

router.post("/login", postLogin);

router.post("/register", postRegister);

router.get("/logout", logOut);
export default router;