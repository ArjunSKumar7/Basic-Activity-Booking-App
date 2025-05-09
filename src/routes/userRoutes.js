import express from "express";
import userController from "../controllers/userController.js";
import authCheck from "./middlewares/authCheck.js";
const router = express.Router();

//user login and signup

router.get("/getAllActivities", userController.getAllActivities);
router.post("/bookActivity", authCheck(),userController.bookActivity);
router.get("/getBookedActivities",authCheck(), userController.getUserBookings);





export default router;
