import { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export const Todo = () => {
  const todosList = [
    {
      id: 1,
      task: 'a',
    },
    {
      id: 2,
      task: 'b',
    },
    {
      id: 3,
      task: 'c',
    }
  ]
  const [todos, setTodos] = useState(todosList)
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }
  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }
  return (
    <>
      <TodoList 
        todos={todos}
        deleteTodo={deleteTodo}
      />
      <TodoForm createTodo={createTodo}/>
    </>
  )
} 
export default Todo