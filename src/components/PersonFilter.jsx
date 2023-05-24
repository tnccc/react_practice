export const PersonFilter = ({filterState}) => {
  const [filterVal, setFilterVal] = filterState
  return (
    <>
      <input onChange={(e) => setFilterVal(e.target.value)} value={filterVal} type="text" />
    </>
  )
}
export default PersonFilter