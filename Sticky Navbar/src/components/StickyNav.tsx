import { createRef, useState } from "react";
import classes from "./StickyNav.module.css";

const StickyNav = () => {
  const [navActive, setNavActive] = useState(false);
  const navRef = createRef<HTMLElement>();

  const fixNav = () => {
    if (!navRef.current) return;

    if (window.scrollY > navRef.current?.offsetHeight + 150) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  window.addEventListener("scroll", fixNav);

  return (
    <nav
      ref={navRef}
      className={`${classes.nav} ${navActive && classes.active}`}
    >
      <div className={classes.container}>
        <h1 className={classes.logo}>
          <a href="#">My Website</a>
        </h1>
        <ul>
          <li>
            {" "}
            <a href="#" className={classes.current}>
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="#">About</a>
          </li>
          <li>
            {" "}
            <a href="#">Services</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StickyNav;
