import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={`${isActive && "active"}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button
        className="icon"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
      </button>
    </nav>
  );
};

export default Nav;
