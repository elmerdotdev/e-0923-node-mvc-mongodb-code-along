require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 4000

// Import routes
const itemRoutes = require('./routes/itemRoutes')
const productRoutes = require('./routes/productRoutes')

// Middleware
app.use(express.json())
app.use(cors())

// Connect to MongoDB Atlas
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log(`Database is connected!`))
  .catch(err => console.error(`Connection failed: ${err}`))

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!')
})
app.use('/items', itemRoutes)
app.use('/products', productRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})