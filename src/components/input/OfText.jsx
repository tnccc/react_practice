export const InputOfText = ({valState}) => {
  const [val, setVal] = valState
  return (
    <>
      <input 
        id="123"
        placeholder="こんにちは"
        value={val} 
        type="text"
        onChange={(e) => setVal(e.target.value)} 
      />
    </>
  )
}
export default InputOfText