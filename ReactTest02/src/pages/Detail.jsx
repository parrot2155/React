//parameter 받기
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);

  //http://localhost:5173/detail/test => params 에 {id:test}로 받아진다.
  return <h1>{params.id}의 Detail 페이지</h1>;
};

export default Detail;
