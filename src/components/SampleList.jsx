export const SampleList = (props) => {
  const {array} = props
  console.log(array)

  return (
    <div>
      {array.map((item, index) => {
        return <div key={index}>{item.text}</div>
      })}
    </div>
  )
}

export default SampleList;