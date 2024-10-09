import { app,PORT } from "./server.js"

//Serving starting point
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})