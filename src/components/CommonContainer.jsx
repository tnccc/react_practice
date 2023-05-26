import { useState } from "react"
import { InputOfText }  from "./input/OfText"
import { InputOfTextArea } from "./input/OfTextArea"
import { InputOfRadio } from "./input/OfRadio"

export const CommonContainer = () => {
  const [val, setVal] = useState('')
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
    </>
  )
}
export default CommonContainer