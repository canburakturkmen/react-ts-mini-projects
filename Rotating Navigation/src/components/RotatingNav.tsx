import { useState } from "react";
import classes from "./RotatingNav.module.css";
const RotatingNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div
        className={`${classes.container} ${showNav ? classes["show-nav"] : ""}`}
      >
        <div className={`${classes["circle-container"]}`}>
          <div className={classes.circle}>
            <button
              id={classes.close}
              onClick={() => {
                setShowNav(false);
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            <button
              id={classes.open}
              onClick={() => {
                setShowNav(true);
              }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className={classes.content}>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            ratione molestias, fugit eveniet maxime aspernatur eum blanditiis,
            enim quasi exercitationem, totam porro doloremque repudiandae.
            Aliquid fuga unde nihil mollitia dolorem officia, id aut iusto
            temporibus impedit, maiores adipisci recusandae eligendi aspernatur
            tempora doloribus maxime magni ratione! Necessitatibus eos, alias
            qui, error cum harum velit nam deleniti aperiam atque rerum quas,
            quam quos reprehenderit distinctio similique quidem libero assumenda
            dicta tempore sit. Possimus, delectus voluptate qui quasi dolor nisi
            ea molestiae vero tenetur reprehenderit necessitatibus minus earum
            veniam praesentium doloribus quisquam repellendus odio tempore
            dolores rem optio, blanditiis in atque animi!
          </p>
          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="cute dog"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            officia error nihil dignissimos, assumenda amet! Laboriosam facilis
            eveniet a, veniam quibusdam quis rem aut harum dolorem, sequi ea
            doloribus eos dolore tenetur qui magnam neque? Eligendi natus nemo,
            alias adipisci tempore facilis, a laudantium mollitia accusamus id
            debitis necessitatibus cum cumque, explicabo voluptatibus. Accusamus
            accusantium sequi eos nulla, fuga culpa nesciunt quo aspernatur
            tempore eaque mollitia tenetur, totam eius quidem? Consectetur
            quisquam sit omnis quae!
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <i className="fas fa-home">&nbsp;&nbsp;&nbsp;Home</i>
          </li>
          <li>
            <i className="fas fa-user-alt">&nbsp;&nbsp;&nbsp;About</i>
          </li>
          <li>
            <i className="fas fa-envelope">&nbsp;&nbsp;&nbsp;Contact</i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RotatingNav;
