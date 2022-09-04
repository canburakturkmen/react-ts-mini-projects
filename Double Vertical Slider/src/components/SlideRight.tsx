type props = {
  imageUrl: string;
};
const SlideRight = (props: props) => {
  return <div style={{ backgroundImage: props.imageUrl }}></div>;
};

export default SlideRight;
