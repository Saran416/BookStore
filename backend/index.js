import express from "express"
import {PORT} from './config.js'
import bookRouter from "./Routes/bookRoute.js"
import cors from 'cors'
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use('/books',bookRouter)


const corsOptions = {
    credentials: true,
    origin: ['http://localhost/*'] 
};

app.use(cors(corsOptions));

mongoose.connect("mongodb://localhost:27017/book-store").then(()=>{
    console.log("Successfully connected to Database")
}).catch((err)=>{
    console.log("Error: ",err)
})

app.listen(PORT,()=>{
    console.log(`Listening on the port ${PORT}`)
})