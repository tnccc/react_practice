import { useState } from "react"

export const StateArray = () => {
  const numArray = [1, 2, 3, 4, 5]
  const [nums, setNums] = useState(numArray)
  const shuffleArray = () => {
    const newNums = [ ...nums ]
    const value = newNums.pop()
    newNums.unshift(value)
    setNums(newNums)
  }
  return(
    <>
      {nums}
      <div>
        <button onClick={shuffleArray}>シャッフル</button>
      </div>
    </>
  )
}
export default StateArray