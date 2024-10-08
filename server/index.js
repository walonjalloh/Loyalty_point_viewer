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


//Serving starting point
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})