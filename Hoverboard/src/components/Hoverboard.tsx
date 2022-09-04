import Square from "./Square";

const SQUARES = Array.from(Array(600).keys());

const Hoverboard = () => {
  console.log(SQUARES);
  return (
    <div className="container">
      {SQUARES.map((val) => (
        <Square key={val} />
      ))}
    </div>
  );
};

export default Hoverboard;
