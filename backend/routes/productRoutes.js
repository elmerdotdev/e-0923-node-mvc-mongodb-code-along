const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.getAllProducts) // Browse
router.get('/:id', productController.getProductById) // Read
router.put('/:id', productController.updateProductById) // Edit
router.post('/', productController.createProduct) // Add
router.delete('/:id', productController.deleteProductById) // Delete

module.exports = router