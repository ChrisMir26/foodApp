import express from "express"
import User from "../models/userModel.js"

const router = express.Router()


router.post('/create-user', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
        });

        const savedUser = await user.save();
        res.status(200).json({ data: savedUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


export default router