import express from "express";
import User from "../models/roomsModel.js";

const router = express.Router();

router.get("/getRoom", (req, res) => {
    res.send("Hello user, Welcome to our hotels listing, please sign in!");
})
//PostRoute
router.post("/addNew", async (req, res) => {

    const newUser = new User(req.body) 

   try {
    const savedUser = await newUser.save()
    res.status(200).json(savedUser);

   } catch (err){
    res.status(500).json(err)

   }
})


export default router;