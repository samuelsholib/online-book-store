import express from "express";
import Room from "../models/roomsModel.js";

const router = express.Router();

router.get("/getRoom", (req, res) => {
    res.send("Hello valued customer, Here are lists of luxurious rooms!");
})
//PostRoute
router.post("/addNew", async (req, res) => {

    const newRoom = new Room(req.body) 

   try {
    const savedRoom = await newRoom.save()
    res.status(200).json(savedRoom);

   } catch (err){
    res.status(500).json(err)

   }
})


export default router;