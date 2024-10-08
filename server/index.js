import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

const app = express()
const PORT = 3500

app.use(express.json()) 


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






//Serving starting point
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})