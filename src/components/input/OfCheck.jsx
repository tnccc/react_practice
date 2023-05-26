import { useState } from "react"
export const InputOfCheck = ( {foods, setFoods} ) => {
  console.log(foods)
  const [sum, setSum] = useState(0)
  const handleChange = (e) => {
    const newFoods = foods.map(food => {
      if(food.label === e.target.value) {
        return {
          ...food,
          checked: !food.checked
        }
      }
      return food
    })
    setFoods(newFoods)
    const sumVal = newFoods
      .filter(food => food.checked)
      .reduce((sum, food) => sum + food.value, 0)
    setSum(sumVal)
  }
  return (
    <>
      {foods.map(food => (
        <div key={food.label}>
          <input 
            type="checkbox" 
            value={food.label}
            checked={food.checked}
            onChange={handleChange}
          />
          <label>{food.label}:{food.value}</label>
        </div>
      ))}
      <div>合計: {sum}</div>
    </>
  )
}
export default InputOfCheck