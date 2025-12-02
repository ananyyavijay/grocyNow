import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js';
dotenv.config();
import userRoutes from './routes/user.routes.js';
import sellerRoutes from './routes/seller.routes.js'
import productRoutes from './routes/product.routes.js'
import { connectCloudinary } from './config/cloudinary.js';

const app = express();

connectDB();
connectCloudinary();

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

app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});