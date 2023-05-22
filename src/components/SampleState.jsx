import { useState } from "react"

export const CountResult = ({ title, count }) =>  <h3>{title}: {count}</h3>
export const CountUpdate = ({setCount, count}) => {
  const countUp = () => {
    setCount(prev => prev + 1)
  }
  const countDown = () => {
    count !== 0 ? setCount(prev => prev - 1) : setCount(0)
  }
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
}
export const SampleState = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>練習問題</h3>
      <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} count={count} /> 
    </>
  )
}
export default SampleState