// props    매개변수라고 생각하면됨

const Btn = (props) => {
  console.log(props);
  return (
    <>
      <button style={{ fontSize: props.size }}>{props.text}</button>
    </>
  );
};

// Btn.defaultProps = {
//   size: 5,
// };

export default Btn;
