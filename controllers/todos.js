const pool = require('../db/connect.js')

const getAllTodos = async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo ')
    res.status(200).json({ data: todos.rows })
  } catch (error) {
    res.statu(400).json({ error: error.message })
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
    res.status(400).json({ error: error.message })
  }
}

const getTodo = async (req, res) => {
  try {
    const { id } = req.params

    console.log(typeof id)

    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
    res.status(200).json({ data: todo.rows[0] })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body

    await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2 ', [
      description,
      id
    ])

    res.status(200).json({ data: 'Todo updated' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
    res.status(200).json({ data: 'Todo deleted' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
}
