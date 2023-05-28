export const InputOfText = ({valState}) => {
  const [val, setVal] = valState
  return (
    <>
    <div className="input-container">
      <input 
        id="123"
        placeholder="こんにちは"
        value={val} 
        type="text"
        onChange={(e) => setVal(e.target.value)} 
      />
      {val}
    </div>
    </>
  )
}
export default InputOfText