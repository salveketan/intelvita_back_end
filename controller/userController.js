const express = require('express');
const router = express.Router();

const User = require("../models/userSchema")

router.get("", (req, res) => {
    res.send("hello")
})

router.post("/signin", async (req, res) => {
    const { name, email, passowrd, age } = req.body;
    
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(401).send({ message: "userExisted" })
        }
        const user = await User.create(req.body)
        return res.status(201).send({ user })

    } catch (error) {
        return res.status(501).send({ message: error.message })
    }

})


router.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(451).send({ message: "Not exited user" })
    }
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (!userExist) {
            return res.status(401).send({ message: "Not exited user" })
        }
        const match = userExist.checkPassword(req.body.password)
        if (!match) {
            return res.status(401).send({ message: "Invalid Credientials" })
        }
        return res.status(201).send({ userExist })

    } catch (error) {
        return res.status(501).send({ message: error.message })
    }
})

module.exports = router;