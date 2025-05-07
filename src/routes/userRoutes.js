import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

//user login and signup

router.get("/getAllActivities", userController.getAllActivities);
router.post("/bookActivity", userController.bookActivity);





export default router;
