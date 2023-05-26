import { useState } from "react"
import { InputOfText }  from "./input/OfText"
import { InputOfTextArea } from "./input/OfTextArea"
import { InputOfRadio } from "./input/OfRadio"
import { InputOfCheck } from "./input/OfCheck"

export const CommonContainer = () => {
  const [val, setVal] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [foods, setFoods] = useState([
    {label: 'ラーメン', value: 100, checked: false},
    {label: 'ドーナッツ', value: 200, checked: false},
    {label: 'トンカツ', value: 400, checked: false},
  ])
  const radios = [
    { label: 'Apple',},
    { label: 'Banana'},
    { label: 'Cherry'}
  ]
  const [selectedRadio, setSelectedRadio] = useState(radios[0].label)
  const handleRadioChange = (value) => {
    setSelectedRadio(value)
  }
  return (
    <>
      <InputOfText valState={[val, setVal]}/>
      <InputOfTextArea valState={[val, setVal]} />
      <InputOfRadio 
        radios={radios}
        selectedRadio={selectedRadio}
        onRadioChange={handleRadioChange}
      />
      <InputOfCheck 
        foods={foods}
        setFoods={setFoods}
      />
    </>
  )
}
export default CommonContainer