import express from "express"
import cors from 'cors'
import { userRouter } from "./routes/user";
import './config'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/user/',userRouter);

const PORT = process.env.PORT;
app.listen(PORT);