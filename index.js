import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import http from "http";
import db from "./config/database.js";
import serverConfig from "./config/serverConfig.js";
import cookieParser from "cookie-parser";
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


db.connect();
serverConfig(server);