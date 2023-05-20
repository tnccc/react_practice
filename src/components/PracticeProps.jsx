import PracticeProfile from "./PracticeProfile"

export const PracticeProps = () => {
  const profile = [
    { name: "Takashi", age: 19, country: "Japan" },
    { name: "Jane", age: 28, country: "UK" },
  ]

  return (
    <div>
      <h3>練習問題</h3>
      <p>Profileコンポーネントの中身を変更して完成コードと同じ状態になるようにしてください。※なるべく分割代入を使用してください。
      </p>
      <PracticeProfile
        {...profile[0]}
      />
      <PracticeProfile {...profile[1]} />
      <PracticeProfile />
    </div>
  )
}
export default PracticeProps