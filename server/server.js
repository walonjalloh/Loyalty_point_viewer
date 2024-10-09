import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import corsOptions from './configs/corsOptions.js'
import { config } from 'dotenv'

const app = express()
const PORT = 3000

config()

app.use(express.json()) 
app.use(cors(corsOptions))


//default route
app.get('/', (req,res) => {
    res.send('Hello world')
})

//user sign up

//user sign in

//user delete

//brand sign up

//brand sign in

//brand delete

//create a reward

//get all rewards

//update the point on users

//get all brands

//get the specific user && getting the user rewards

//delete a reward

//updata a reward






export {
    app,
    PORT
}