export const InputOfRadio = ({radios, selectedRadio, onRadioChange}) => {
  const handleRadioChange = (e) => {
    onRadioChange(e.target.value)
  }
  return (
    <>
      {radios.map((radio) => (
        <div key={radio.label}>
          <label>
            <input 
              type="radio" 
              value={radio.label}
              onChange={handleRadioChange}
              checked={selectedRadio === radio.label}
            />
            <span>{radio.label}</span>
          </label>
          <h3>
            {selectedRadio === radio.label ? `私は${radio.label}が食べたい` : ''}
          </h3>
        </div>
      ))}
    </>
  )
}
export default InputOfRadio