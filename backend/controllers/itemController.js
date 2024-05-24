const Item = require('../models/itemModel')

// Get all items - BROWSE
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
    res.status(200).json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get item by id - READ
const getItemById = async (req, res) => {
  try {
    const itemId = req.params.id
    const item = await Item.findById(itemId)
    if (!item) {
      return res.status(404).json({ message: 'Item not found!' })
    }
    res.status(200).json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update an item by id - EDIT
const updateItemById = async (req, res) => {
  try {
    const itemId = req.params.id
    const item = await Item.findById(itemId)
    if (!item) return res.status(404).json({ message: 'Item does not exist!' })
    if (req.body.name) item.name = req.body.name // update found item name property
    if (req.body.description) item.description = req.body.description // update found item description property
    const updatedItem = await item.save()
    res.status(200).json(updatedItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Add an item - ADD
const createItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description
    })
    const addItem = await newItem.save()
    res.status(201).json(addItem)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete item by id - DELETE
const deleteItemById = async (req, res) => {
  try {
    const itemId = req.params.id
    const item = await Item.findById(itemId)
    if (!item) return res.status(404).json({ message: 'Item does not exist!' })
    
    const deleteConfirm = await item.deleteOne()
    res.status(200).json(deleteConfirm)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllItems,
  getItemById,
  updateItemById,
  createItem,
  deleteItemById
}