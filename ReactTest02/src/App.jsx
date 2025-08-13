import List from "./pages/List";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const navi = useNavigate();
  function onClickBtn() {
    //페이지를 이동시키는 함수 활용
    navi("/list");
  }
  return (
    <>
      <button onClick={onClickBtn}>클릭</button>
      <a href="/list">리스트</a> {/*새로고침되면서 바뀐다.*/}
      <div>
        <Link to={"/"}>Home</Link>&nbsp;
        <Link to={"/list"}>List</Link> {/*a태그처럼 보이긴 하지만 새로고침 되지 않고 바뀐다.*/}&nbsp;
        <Link to={"/detail/tw"}>Detail</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} /> {/* localhost:5173/detail/아이디에 해당하는 값 <=경로로 가보면 해당 페이지가 뜬다.*/}
        <Route path="*" element={<Error />} />
        {/* path="*" : 와일드카드*/}
      </Routes>
    </>
  );
}

export default App;
