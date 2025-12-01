import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js';
dotenv.config();

const app = express();

connectDB();
const allowedOrigins = [
    "http://localhost:5173"
];

//middlewares
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(cookieParser());

//api endpoints
app.get("/", (req, res) => {
    res.send("Hello World!")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});