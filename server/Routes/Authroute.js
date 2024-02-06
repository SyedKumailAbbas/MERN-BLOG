import express from 'express'
import { signin, signup } from '../Controllers/Authcontroller.js'

const router=express.Router()

router.post('/signup', signup)
router.post('/signin',signin)



export default router