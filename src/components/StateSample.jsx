import { useState } from "react"

export const StateSample = () => {
  const [val, setval] = useState(0)
  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)
  const [valueC, setValueC] = useState(0)
  const countUp = () => {
    setval(val + 1)
  }
  const countDown = () => {
    if(val !== 0) {
      setval(val - 1)
    } 
  }
  return (
    <>
      {/* <input onChange={changeHandler} />
      <p>{ value }</p> */}
      <p>ボタンAを{ valueA }回押しました！</p>
      <button onClick={() => {setValueA(valueA + 1)}}>
        ボタンA
      </button>
      <p>ボタンBを{ valueB }回押しました！</p>
      <button onClick={() => {setValueB(valueB + 1)}}>
        ボタンB
      </button>
      <p>ボタンCを{ valueC }回押しました！</p>
      <button onClick={() => {setValueC(valueC + 1)}}>
        ボタンC
      </button>
      <div>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
        {val}
      </div>
    </>
  )
}
export default StateSample