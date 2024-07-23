import express from "express";
import isAuthenticate from "../MiddleWare/isAuthenticate.js";
import {
  userRegistration,
  userLogin,
  getOtherUsers,
  userLogout,
} from "../Controllers/userController.js";

const router = express.Router();

router.post("/registration", userRegistration);
router.post("/login", userLogin);
router.get("/getOtherUser", isAuthenticate, getOtherUsers);
router.get("/logout", userLogout);

export default router;
