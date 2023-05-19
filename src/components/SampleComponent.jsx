import SampleList from './SampleList'
import { Fragment } from 'react'

export const SampleComponent = () => {
  const sampleArray = [
    {text: 'リスト1'}, 
    {text: 'リスト2'}, 
    {text: 'リスト3'}
  ]

  return (
    <Fragment>
    <div className="sample">
      <p>サンプルです</p>
      <SampleList array={sampleArray}></SampleList>
    </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae officia laborum quidem veniam, quos nisi saepe accusamus repellendus error animi at. Repudiandae magni facere veniam dolor natus culpa atque!</p>
    </Fragment>
  )
}

export default SampleComponent;