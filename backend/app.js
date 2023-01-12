import express from "express";
import dotenv from 'dotenv';
import mongoose, { disconnect } from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import roomRoutes from "./routes/rooms.js";
import hotelsRoutes from "./routes/hotels.js";



const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('MongoDb connected');
    } catch (error) {
        throw error;

    }
};
mongoose.connection.on("disconnected", () => {
    console.log("mongoose disconnected")
})


// Middlewares

app.use("/auth", authRoutes);
app.use("/rooms", roomRoutes);
app.use("/hotels", hotelsRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello, you are at home page!");
})

app.listen(3001, () => {
    connect()
    console.log("backend connected")
})