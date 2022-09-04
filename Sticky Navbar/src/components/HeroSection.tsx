import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <div className="container">
        <h1>Welcome To My Website</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          magnam!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
