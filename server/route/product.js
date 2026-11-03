const express = require('express')
const Product = require('../models/product')
const route = express.Router()


route.post('/', async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error:"server error"})
    }
})

route.get('/', async (req,res) => {
    try {
        const product = await Product.find()
       res.status(200).json(product)
    } catch (error) {
         res.status(500).json({error:"server error"})
    }
})

module.exports = route