export const SampleList = ({array}) => {

  return (
    <div>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item.text}</li>
        })}
      </ul>
    </div>
  )
}

export default SampleList;