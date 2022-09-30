import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()
dotenv.config()
const PORT = 3001;

const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to databse')
    } catch (error) {
    handleError(error);
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("db disconected")
})

mongoose.connection.on("disconnected", () => {
    console.log("db conected")
})


app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || PORT, () => {
    connect()
       
    console.log(`app is running on port: ${PORT}`)
})