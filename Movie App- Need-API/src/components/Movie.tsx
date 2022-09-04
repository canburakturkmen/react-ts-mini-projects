import classes from "./Movie.module.css";

const Movie = () => {
  <div>
    <img />
    <div className={classes.movie}></div>
    <div className={classes["movie-info"]}>
      <h3></h3>
      <span className={classes.color}></span>
    </div>
    <div className={classes.overview}>
      <h3></h3>
      <p></p>
    </div>
  </div>;
};

export default Movie;
