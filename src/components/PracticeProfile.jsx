export const PracticeProfile = ({name = 'John Doe', age = '??', country = 'Japan', children}) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>From: {country}</p>
      {children}
    </div>
  )
}
export default PracticeProfile