import { useState } from "react"
import InputOfText from "./input/OfText"
import { InputOfTextArea } from "./input/OfTextArea"


export const CommonContainer = () => {
  const [val, setVal] = useState('')

  return (
    <>
      <InputOfText valState={[val, setVal]}/>
      <InputOfTextArea valState={[val, setVal]} />
    </>
  )
}
export default CommonContainer