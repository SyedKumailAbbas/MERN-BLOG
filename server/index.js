import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import authroute from './Routes/Authroute.js'
dotenv.config()
mongoose.connect(process.env.MONGO)
.then(() => {
        console.log("database connected")
    }
).catch((err)=>{
    console.log(err)
})


const app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', authroute)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server start running")
})
