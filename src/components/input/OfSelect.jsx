export const InputOfSelect = ({options ,selected, setSelected}) => {
  
  console.log(selected)
  return (
    <>
      <select 
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map(option => (
          <option 
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </>
  )
}
export default InputOfSelect