import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { connectDb } from "./config/db.js";
import { userRouter } from "./route/userRoute.js";

const app = express();
app.use(express.json());
app.use(cors()); 

//database connection
connectDb();

app.use('/users',userRouter) 

app.listen(4000);








