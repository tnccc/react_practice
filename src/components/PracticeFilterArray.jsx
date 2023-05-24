import { useState } from "react"
import PersonList from "./PersonList"
import PersonFilter from "./PersonFilter"

export const PracticeFilterArray = () => {
  const [filterVal, setFilterVal] = useState('')
  const persons = [
    {
      name: 'tom',
      age: 18,
      hobby: [
        'sports',
        'music'
      ]
    },
    {
      name: 'koki',
      age: 22,
      hobby: [
        'movie',
        'music'
      ]
    },
    {
      name: 'yoshio',
      age: 32,
      hobby: [
        'sports',
        'travel'
      ]
    }
  ]
  const filteredPersons = persons.filter((person) => {
    const isMatch = person.name.indexOf(filterVal) !== -1;
    return isMatch
  })
  return (
    <>
      <div>
        <PersonFilter filterState={[filterVal, setFilterVal]}/>
        <PersonList persons={filteredPersons}/>
      </div>
    </>
  )
}
export default PracticeFilterArray