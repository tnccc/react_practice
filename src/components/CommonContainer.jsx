import { Todo } from './Todo'

export const CommonContainer = () => {
  
  return (
    <>
      <div className='container'>
        <h3 className='title'>Reminder</h3>
        <Todo />
      </div>
    </>
  )
}
export default CommonContainer