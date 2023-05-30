import { VStack, StackDivider } from '@chakra-ui/react'
export const TodoList = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
  return (
    <>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        borderRadius='3px'
        flex='1 0 50%'
        width='50%'
        p={5}
      >
        {todos.map(todo => (
          <div className="todos" key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.task}</span>
          </div>
        ))}
      </VStack>
    </>
  )
}
export default TodoList