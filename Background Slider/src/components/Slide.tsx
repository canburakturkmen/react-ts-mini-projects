type props = {
  imageUrl: string;
  className: string;
  children?: React.ReactNode;
};
const Slide: React.FC<props> = (props) => {
  return (
    <div
      className={props.className}
      style={{ backgroundImage: `url('${props.imageUrl}')` }}
    ></div>
  );
};

export default Slide;
