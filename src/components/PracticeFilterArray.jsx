import { useState } from "react"

export const PracticeFilterArray = () => {
  const [filterVal, setFilterVal] = useState('')
  const humans = [
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
  
  return (
    <>
      <div>
        <input onChange={(e) => setFilterVal(e.target.value)} value={filterVal} type="text" />
        {humans
          .filter(human => human.name.indexOf(filterVal) !== -1)
          .map(human => 
          <li key={human.name}>
            <div>
              <h3>{human.name}</h3>
              <p>{human.age}</p>
              <ul>
                {human.hobby.map(hobby => 
                  <li key={hobby}>{hobby}</li>)
                }
              </ul>
            </div>
          </li>
        )}
      </div>
    </>
  )
}
export default PracticeFilterArray