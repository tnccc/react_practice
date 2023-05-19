import SampleList from './SampleList'

export const SampleComponent = () => {
  const sampleArray = [
    {text: 'リスト1'}, 
    {text: 'リスト2'}, 
    {text: 'リスト3'}
  ]

  return (
    <div className="sample">
      <p>サンプルです</p>
      <SampleList array={sampleArray}></SampleList>
    </div>
  )
}

export default SampleComponent;