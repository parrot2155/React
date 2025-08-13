import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main"; //jsx 불러올 때는 확장자명 안써도 된다!
import Btn from "./components/Btn";
import Btn2 from "./components/Btn2";

// function Header(){}
//html을 리턴하는 함수 => 컴포넌트
//컴포넌트 함수 이름은 첫글자 대문자. 소문자는 인정 안해줌.
const Header = () => {
  return (
    <header>
      <h1>Header.//</h1>
    </header>
  );
};

function App() {
  //자바스크립트 코드처럼 생겼는데 안에 html코드가 리턴되고 있다. -> function단위로 모듈을 만들었다.

  const btnData = {
    text: "작성완료",
    size: 50,
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <hr></hr>
      <Btn text={"확인"} size={30} />
      <Btn text={"완료"} />
      <hr></hr>
      <Btn2 {...btnData} />
      {/* ... => 스프레드 연산자 : 한번에 모아가지고 처리를 진행하자.*/}
      <Btn2 text={"취소"}>
        <div>Btn2의 자식 태그</div>
        <Main></Main>
      </Btn2>
    </>
  );
}

export default App;
