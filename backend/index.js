import express from "express"
import {PORT} from './config.js'
import bookRouter from "./Routes/bookRoute.js"
import cors from 'cors'
import mongoose from "mongoose"
import { mongodbURL } from "./config.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({ extended: true })
);
app.use('/books',bookRouter)

mongoose.connect(mongodbURL).then(()=>{
    console.log("Successfully connected to Database")
}).catch((err)=>{
    console.log("Error: ",err)
})

app.listen(PORT,()=>{
    console.log(`Listening on the port ${PORT}`)
})