import User from "../Models/Usermodel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
export const signup = async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password || email == " " || password == " " || username == " ") {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const hashedpass = bcryptjs.hashSync(password, 10)

    const newuser = new User({
        username,
        email,
        password: hashedpass
    })

    try {
        await newuser.save()
        return res.json("Signup Successfully")
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

}

export const signin = async (req, res) => {
    const { email, password } = req.body
    dotenv.config()
    if (!email || !password) {
        res.json("All fields are required")
    }
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            res.json("Invalid User")
        }
        const validPass = bcryptjs.compareSync(password, validUser.password)
        if (!validPass) {
            res.json("Invalid User")
        }
        try{
            const token = jwt.sign({id: validUser._id},process.env.TOKENKEY)
            const {password:pass, ...rest}=validUser._doc
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest)
        }
        catch(err){

        }
    }
    catch (err) {
        res.status(500).send(err.message)
    }

}