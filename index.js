const express = require('express')
const cors = require('cors')
const todosRouter = require('./routes/todos.router')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1/todos', todosRouter)

app.listen(PORT, () => {
  console.log('Server running...')
})
