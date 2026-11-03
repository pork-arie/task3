const express =  require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()
const prodRoute = require('./route/product')

app.use(express.json())



app.use('/api/products', prodRoute)

mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("db connected")).catch(error => console.error("error db not connected",error.message))

app.get("/api", async(req,res) => {
    res.status(200).json({message:"working in api test"})
})

app.listen(3000,() => console.log("working in port 3000"))