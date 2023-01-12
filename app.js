import express from "express";
import dotenv from "dotenv";
import { Path } from "mongoose";
const app = express();

import { db } from "./config/connection.js";

db.once('open', () => {


    app.listen(3001, () => {
        connection()
        console.log("App listening at port 3001.")
    })
});
