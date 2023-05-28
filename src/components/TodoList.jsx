export const TodoList = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
  return (
    <>
      <div>
        {todos.map(todo => (
          <div className="todos" key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.task}</span>
          </div>
        ))}
      </div>
    </>
  )
}
export default TodoList