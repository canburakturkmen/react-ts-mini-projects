import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Movie App</h1>
      <form>
        <input type="text" placeholder="Search" className={classes.search} />
      </form>
    </header>
  );
};

export default Header;
