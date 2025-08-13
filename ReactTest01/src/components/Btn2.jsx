const Btn2 = ({ text, size = 40 }) => {
  //{prop,props} => 구조분해할당  =40 ->이거는 기본값임.
  const onClickBtn = (e) => {
    //e : 이벤트 객체
    console.log(text);
    console.log(size);
    console.log(e);
  };
  return (
    <>
      <button onClick={onClickBtn} style={{ fontSize: size }}>
        {text}
      </button>
    </>
  );
};

export default Btn2;
