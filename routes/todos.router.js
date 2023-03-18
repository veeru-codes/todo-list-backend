const express = require('express')
const {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.js')

const todosRouter = express.Router()

todosRouter.route('/').get(getAllTodos).post(createTodo)

todosRouter.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo)

module.exports = todosRouter
