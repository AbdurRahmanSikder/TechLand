import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoDB from './configs/db.js';
import userRoute from './routes/userRoute.js';
import sellerRoute from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRoute from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 4000;

//Allow multiple origin
const allowedOrigins = ['http://localhost:5173']
await mongoDB();
await connectCloudinary();

//Middleware Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials:true}))

app.get("/",(req,res)=>res.send("Api is working"));
app.use("/api/user",userRoute);
app.use("/api/seller", sellerRoute);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRoute);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRoute);


app.listen(port,()=>console.log(`server is running on port ${port}`));
