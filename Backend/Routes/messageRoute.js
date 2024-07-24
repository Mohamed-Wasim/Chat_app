import express from "express";
import isAuthenticate from "../MiddleWare/isAuthenticate.js";
import { sendMessage } from "../Controllers/messageController.js";

const router = express.Router();

router.post("/sendMessage/:id", isAuthenticate, sendMessage);

export default router;
