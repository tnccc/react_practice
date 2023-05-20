export const PracticeProfile = ({name = 'John Doe', age = '??', country = 'Japan'}) => {
  console.log(name)

  return (
    <div>
      <h3>{`Name: ${name}`}</h3>
      <p>{`Age: ${age}`}</p>
      <p>{`From: ${country}`}</p>
    </div>
  )
}
export default PracticeProfile