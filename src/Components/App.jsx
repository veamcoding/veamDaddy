import './App.css'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>홈 페이지 입니다~!!!!!</h1>
      <Link to={"/company"}>기업소개페이지로 가기</Link>
    </div>
  )
}
export default App
