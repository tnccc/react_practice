import { useState } from "react"

export const CommonButton = () => {
  const [isSelected, setIsSelected] = useState(false)
  const clickHandler = () => setIsSelected(prevState => !prevState)

  const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 300,
  }
  const style = {
    width: 120,
    height: 60,
    color: '#fff',
    backgroundColor: isSelected ? 'pink' : '#333',
    border: 'none'
  }
  return (
    <>
      <div style={container}>
        <button 
          style={style}
          onClick={clickHandler}
        >
          ボタン
        </button>
        <div>{isSelected && 'クリックされました'}</div>
      </div>
    </>
  )
}
export default CommonButton