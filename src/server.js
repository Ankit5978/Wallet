import express from "express"

import dotenv from "dotenv"

import { initDB } from "./config/db.js";
import transactionRoutes from "./routes/transactionRoutes.js"

dotenv.config()
const app= express();


app.use(express.json())

app.use((req,res,next)=>{
    console.log("we hit a request",req.method)
    next()
})

const PORT= process.env.PORT




app.use("/api/transaction",transactionRoutes)

initDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
})
})