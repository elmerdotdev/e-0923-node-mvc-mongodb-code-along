const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName: String,
  productDesc: String,
  isSale: Boolean
})

module.exports = mongoose.model('Product', productSchema)