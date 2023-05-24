import PersonItem from "./PersonItem"
const PersonArray = ({persons}) => {
  if(persons.length === 0) {
    return <h3>パーソンがいません。</h3>
  }
  return (
    <>
      {persons
        .map(person => 
          <PersonItem key={person.name} person={person} />
      )}
    </>
  )
}
export default PersonArray