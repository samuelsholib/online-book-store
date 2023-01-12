import express from "express";

const router = express.Router();

router.get ("/", (req, res) => {
    res.send ("Hello this is authentication endPoint")
})
router.get ("/registery", (req, res) => {
    res.send("this is registery endpoint")
})

export default router;