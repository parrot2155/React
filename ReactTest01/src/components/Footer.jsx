function Footer() {
  const name = "ptw";
  const no = 10;
  const obj = { a: 1, b: 2 };

  return (
    <>
      <footer>
        <h1>footer!!푸터푸터풑퍼투퍼투퍼투퍼푸터푸터 {name}</h1>
        <h3>{no}</h3>
        <h3>{no + 10 + "dml"}</h3>
        <h3>{no % 2 == 0 ? "짝수" : "홀수"}</h3> {/* 삼항연산자 외에 조건문이나 반복문은 안된다. */}
        <h3>{obj.a + " : " + obj.b}</h3>
        <hr /> {/* hr태그라도 닫는 문법 꼭 필요하다. */}
      </footer>{" "}
      {/* 애매하면 밖에 최상위에 묶고싶으면 빈 <> 태그로 묶어주면 된다. */}
    </>
  );
}

export default Footer;
