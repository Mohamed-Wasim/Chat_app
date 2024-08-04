import express from "express";
import isAuthenticate from "../MiddleWare/isAuthenticate.js";
import {
  gettingMessage,
  sendMessage,
} from "../Controllers/messageController.js";

const router = express.Router();

router.post("/sendMessage/:id", isAuthenticate, sendMessage);
router.get("/getMessage/:id", isAuthenticate, gettingMessage);

export default router;
