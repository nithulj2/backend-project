//require('dotenv').config({path:"./.env"})
import dotenv from 'dotenv'

import connectDB from './db/index.js';
dotenv.config({path:"./env"})
import { app } from './app.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server has started at ${process.env.PORT}`)
    }) 
})
.catch((err) => {
    console.log("MONGODB connections failed at src index.js",err)
})
































/*
import express from 'express'
const app = express()
(async () => {
    try {
       await mongoose.connect(`${process.env.MONGOBD_URL}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("Err : ", error);
        throw error
       })
       app.listen(process.env.PORT,() => {
        console.log(`app is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.log("Error : ",error)
        throw error
    }
})()
    */