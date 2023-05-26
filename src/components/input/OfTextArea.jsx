export const InputOfTextArea = ({valState}) => {
  const [val, setVal] = valState
  return (
    <>
      <textarea 
        id="456" 
        value={val}
        onChange={(e) => setVal(e.target.value)} 
      />
    </>
  )
}