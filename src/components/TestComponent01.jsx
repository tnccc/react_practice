import { Fragment } from "react";

export const TestComponent01 = () => {
  const title = 'Expression';
  const array = ['item1', 'item2', 'item3'];
  const fn = (arg) => {
    return `${arg} Function`;
  }
  const upperCaseText = 'UpperCaseText';
  return (
    <Fragment className="fragment">
      <h3>練習問題</h3>
      <p>記述を変更し、完成コードと同じ状態になるようにしてください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。※fragmentクラスの付与されたdivタグはfragmentを使用した記法に変更してください。</p>
      <h3>HELLO JSX</h3>
      <h3>{ upperCaseText.toUpperCase() }</h3>
      <h3>{ `Hello ${title}` }</h3>
      <h3>{array.map(el => el)}</h3>
      <h3>{fn('Hello')}</h3>
    </Fragment>
  )

}
export default TestComponent01