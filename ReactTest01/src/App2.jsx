//1. import
import { useState } from "react"; //유즈스테이트 쓰려면 임포트 해와야 한다.

const Body = ({ state, test }) => {
  return (
    <div>
      <h1>
        Body입니다. st값 : {state}, test값 : {test}
      </h1>
    </div>
  );
};

function App2() {
  //2. state 생성
  const [state, setState] = useState(0);
  const [test, setTest] = useState("TEST");
  let cnt = 0;
  //계속 카운트+1하지만 랜더링 될 때마다 처음으로 돌아가 다시 불러오기 때문에 화면에는 계속 0으로만 뜬다.
  //상태값이 계속 저장되며 변화시키고싶다? => state를 써야된다.
  return (
    <>
      <h1>state:{state}</h1>
      <h1>var:{cnt}</h1>
      <Body state={state} test={test} />

      <hr></hr>

      <button
        onClick={() => {
          setState(state + 1);
          cnt = cnt + 1;
          console.log("cnt:" + cnt);
        }}
      >
        클릭
      </button>
    </>
  );
}

export default App2;
