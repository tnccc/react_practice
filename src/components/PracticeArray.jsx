export const PracticeArray = () => {
  const profile = [
    {
      name: 'Geo',
      age: 18,
      Hobby: [
        'sports',
        'music'
      ]
    },
    {
      name: 'Tom',
      age: 25,
      Hobby: [
        'movie',
        'music'
      ]
    },
    {
      name: 'Lisa',
      age: 21,
      Hobby: [
        'sports',
        'travel',
        'game'
      ]
    },
  ]

  return (
    <>
      <div>
        {profile.map(human => 
          <li key={human.name}>
            <div>
              <h3>{human.name}</h3>
              <p>{human.age}</p>
              <div>
                {human.Hobby.map(hobby => 
                  <p key={hobby}>{hobby}</p>
                  )
                }
              </div>
            </div>
          </li>

        )}
      </div>
    </>
  )
}
export default PracticeArray