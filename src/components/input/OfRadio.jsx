export const InputOfRadio = ({radios, selectedRadio, onRadioChange}) => {
  const onChange = (e) => {
    onRadioChange(e.target.value)
  }
  return (
    <>
      {radios.map((radio) => (
        <div key={radio.label}>
          <label htmlFor={radio.label}>
            <input 
              type="radio" 
              value={radio.label}
              onChange={onChange}
              checked={selectedRadio === radio.label}
            />
            <span>{radio.label}</span>
          </label>
        </div>
      ))}
    </>
  )
}
export default InputOfRadio