import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import corsOptions from './configs/corsOptions.js'
import { config } from 'dotenv'
import { userRouter } from './routes/userRoute.js'
import { brandRouter } from './routes/brandRoute.js'
import { rewardRouter } from './routes/rewardRoute.js'
import cookieParse from 'cookie-parser'
import fs from 'fs'

const app = express()

const data = fs.readFileSync('./templates/index.html',"utf-8")

config()

connectDB()

//middlewares
app.use(cookieParse())
app.use(express.static('./templates'))
app.use(express.json()) 
app.use(cors(corsOptions))


//default route
app.get('/', (req,res) => {
    res.send(data)
})

//user router with all the user routes
app.use('/api/user', userRouter)

//brand router with all the brand routes
app.use('/api/brand',brandRouter)

//reward router with all the reward routes
app.use('/api/reward', rewardRouter)


export {
    app,
}