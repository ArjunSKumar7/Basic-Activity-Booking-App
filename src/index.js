import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import db from "./config/database.js";
import serverConfig from "./config/serverConfig.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import { seedActivities } from "./seed/seedData.js";
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

db.connect()
  .then(async () => {
    serverConfig(server);
    await seedActivities();
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });


  //routes

app.use("/api/auth", authRoute);

app.use("/api/user",userRoute);
