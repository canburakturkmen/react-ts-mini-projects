type insect = {
  imgUrl: string;
  position: { x: number; y: number };
  degree: string;
  onClickHandler?: () => void;
};

const Insect = (props: insect) => {
  const styles = {
    top: `${props.position.y}px`,
    left: `${props.position.x}px`,
    transform: `rotateZ(${props.degree})`,
    zIndex: `101`,
  };

  return (
    <div
      style={styles}
      className="insect"
      onClick={() => {
        props.onClickHandler && props.onClickHandler();
      }}
    >
      <img src={props.imgUrl} alt="insect" />
    </div>
  );
};

export default Insect;
