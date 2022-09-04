import { useEffect, useState } from "react";

const Content = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [showHeartInfo, setHeartInfo] = useState({
    isShown: false,
    posX: 0,
    posY: 0,
  });

  const handledoubleClick = (e: React.MouseEvent) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setHeartInfo({
      isShown: true,
      posX: mouseX - left,
      posY: mouseY - top,
    });
    setLikeCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (showHeartInfo.isShown) {
      const showTimeout = setTimeout(() => {
        setHeartInfo((prev) => ({ ...prev, isShown: false }));
      }, 600);
      return () => {
        clearTimeout(showTimeout);
      };
    }
  }, [showHeartInfo.isShown]);

  return (
    <div>
      <h3>
        Double click on the image to <i className="fas fa-heart"></i> it
        <small>
          You liked it <span>{likeCount}</span> times
        </small>
      </h3>
      <div
        className="content"
        onDoubleClick={(e) => {
          handledoubleClick(e);
        }}
      >
        {showHeartInfo.isShown && (
          <div
            style={{
              top: `${showHeartInfo.posY}px`,
              left: `${showHeartInfo.posX}px`,
            }}
            className="fas fa-heart"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Content;
