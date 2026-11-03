const mongoose = require('mongoose')

const prodschema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, default: '' },
  stock: { type: Number, default: 0, min: 0 },
  imageUrl: { type: String, default: '' }
})

const Product = mongoose.model('Product',prodschema)

module.exports = Product