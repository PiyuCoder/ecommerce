import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT
const app = express()

//Middlewares
app.use(cors())
app.use(express.json())



//Database connection
connectDb()

app.use('/api/v1/auth',authRoute)

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`))