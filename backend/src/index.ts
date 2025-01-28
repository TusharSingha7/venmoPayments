import express from "express"
import cors from 'cors'
import { userRouter } from "./routes/user";
import dotenv from 'dotenv'
import path from "path";

dotenv.config({
    path : path.join(__dirname,'../.env')
 });
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/user/',userRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT);