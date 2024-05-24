const Product = require('../models/productModel')

// Get all products - BROWSE
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get product by id - READ
const getProductById = async (req, res) => {
  try {
    const prodId = req.params.id
    const product = await Product.findById(prodId)
    if (!product) {
      return res.status(404).json({ message: 'Product not found!' })
    }
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a product by id - EDIT
const updateProductById = async (req, res) => {
  try {
    const prodId = req.params.id
    const product = await Product.findById(prodId)
    if (!product) return res.status(404).json({ message: 'Product does not exist!' })
    if (req.body.productName) product.productName = req.body.productName
    if (req.body.productDesc) product.productDesc = req.body.productDesc
    if (req.body.isSale) product.isSale = req.body.isSale
    const updatedProduct = await product.save()
    res.status(200).json(updatedProduct)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Add a product - ADD
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      productName: req.body.productName,
      productDesc: req.body.productDesc,
      isSale: req.body.isSale
    })
    const productItem = await newProduct.save()
    res.status(201).json(productItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete product by id - DELETE
const deleteProductById = async (req, res) => {
  try {
    const prodId = req.params.id
    const product = await Product.findById(prodId)
    if (!product) return res.status(404).json({ message: 'Product does not exist!' })
    
    const deleteConfirm = await product.deleteOne()
    res.status(200).json(deleteConfirm)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById
}