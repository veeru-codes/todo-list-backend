const pool = require('../db/connect.js')

const getAllTodos = async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo ')
    res.status(200).json({ data: todos })
  } catch (error) {
    console.log('Error: ', error.message)
  }
}

const createTodo = async (req, res) => {
  try {
    const { description } = req.body

    await pool.query('INSERT INTO todo (description) VALUES ($1)', [
      description
    ])

    res.status(201).json({ msg: 'Todo created' })
  } catch (error) {
    console.log('Error: ', error.message)
  }
}

const getTodo = async (req, res) => {}

const updateTodo = async (req, res) => {}

const deleteTodo = async (req, res) => {}

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
}
