import express from "express";
import Hotel from "../models/hotelsModel.js"

const router = express.Router();

//Routes 

//GetRoute
router.get("/getHotel", (req, res) => {
    res.send("Hello, Here are lists of luxurious hotels!");
})
//PostRoute
router.post("/addNew", async (req, res) => {

    const newHotel = new Hotel(req.body) 

   try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel);

   } catch (err){
    res.status(500).json(err)

   }
})
//DeleteRoute
router.delete("/delete", (req, res) => {
    
})
//UpdateRoute
router.put("/update", (req, res) => {
    
})


export default router;