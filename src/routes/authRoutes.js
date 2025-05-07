import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

//user login and signup

router.post("/user/login", authController.userLogin);
router.post("/user/signup", authController.userSignup);





export default router;
