import { useState } from 'react'
export const TodoForm = ({createTodo}) => {
  const [enteredTodo, setEnteredTodo] = useState('')
  const addTodo = (e) => {
    e.preventDefault()
    
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      task: enteredTodo
    }
    createTodo(newTodo)
    setEnteredTodo('')
  }
  return (
    <>
      <form onSubmit={addTodo}>
        <div className="input-container">
          <input 
            id="123"
            placeholder="こんにちは"
            value={enteredTodo} 
            type="text"
            onChange={(e) => setEnteredTodo(e.target.value)} 
          />
          {enteredTodo}
        </div>
          <button className='add-button'>追加</button>
      </form>
    </>
  )
}
export default TodoForm