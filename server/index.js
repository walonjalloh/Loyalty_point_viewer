import { app} from "./server.js"

//Port from the env file


const PORT = process.env.PORT || 3000
//Serving starting point
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

