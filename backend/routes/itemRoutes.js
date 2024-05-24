const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

// Routes
router.get('/', itemController.getAllItems) // Browse
router.get('/:id', itemController.getItemById) // Read
router.put('/:id', itemController.updateItemById) // Edit
router.post('/', itemController.createItem) // Add
router.delete('/:id', itemController.deleteItemById) // Delete

module.exports = router