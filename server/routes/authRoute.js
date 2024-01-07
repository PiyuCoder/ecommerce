import express from "express";
import {registerController, loginController, testController} from '../controllers/authController.js'
import { requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router()

//REGISTER || POST METHOD
router.post('/register', registerController)

//LOGIN || POST METHOD
router.post('/login', loginController)

//Test || GET METHOD
router.get('/test', requireSignIn, testController)

//DASHBOARD || GET METHOD
router.get('/user-auth', requireSignIn, (req, res)=> res.status(200).send({ok: true}))

export default router

