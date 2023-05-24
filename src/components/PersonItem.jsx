export const PersonItem = ({person}) => {
  return (
    <>
      <li key={person.name}>
          <div>
            <h3>{person.name}</h3>
            <p>{person.age}</p>
            <ul>
              {person.hobby.map(hobby => 
                <li key={hobby}>{hobby}</li>)
              }
            </ul>
          </div>
        </li>
    </>
  )
}
export default PersonItem