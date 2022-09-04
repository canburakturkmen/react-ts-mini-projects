type props = {
  backgroundColor: string;
  title: string;
  text: string;
};

const SlideLeft = (props: props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default SlideLeft;
