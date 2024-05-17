const express = require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose")


const { handleGetRequest, handlePostRequest, handleEditRequest, handleDeleteRequest,} = require("./functions")

dotenv.config()

const app = express()

//middleware
app.use(express.json())


const PORT = process.env.PORT || 3000 

app.listen(PORT, ()=>{
    console.log(`Server started Running on PORT ${PORT}`)
})


mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Mongodb connected..."))

app.get("/employee", handleGetRequest)
app.post("/add-employee", handlePostRequest)
app.put("/edit-user/:id", handleEditRequest)
app.delete("/delete-employee/:id", handleDeleteRequest)
