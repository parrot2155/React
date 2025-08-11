import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

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
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
