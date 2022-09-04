type props = {
  text: string;
  className: string;
  children?: React.ReactNode;
};
const Choice: React.FC<props> = (props) => {
  return <span className={props.className}>{props.text}</span>;
};

export default Choice;
