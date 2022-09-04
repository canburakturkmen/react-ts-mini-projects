import classes from "./Form.module.css";
const Form = () => {
  return (
    <div className={classes.container}>
      <h1>Please Login</h1>
      <form>
        <div className={classes["form-control"]}>
          <input type="text" required />
          <label>
            <span style={{ transitionDelay: "0ms" }}>E</span>
            <span style={{ transitionDelay: "50ms" }}>m</span>
            <span style={{ transitionDelay: "100ms" }}>a</span>
            <span style={{ transitionDelay: "150ms" }}>i</span>
            <span style={{ transitionDelay: "200ms" }}>l</span>
          </label>
        </div>
        <div className={classes["form-control"]}>
          <input type="password" required />
          <label>
          <span style={{ transitionDelay: "0ms" }}>P</span>
            <span style={{ transitionDelay: "50ms" }}>a</span>
            <span style={{ transitionDelay: "100ms" }}>s</span>
            <span style={{ transitionDelay: "150ms" }}>s</span>
            <span style={{ transitionDelay: "250ms" }}>w</span>
            <span style={{ transitionDelay: "300ms" }}>o</span>
            <span style={{ transitionDelay: "350ms" }}>r</span>
            <span style={{ transitionDelay: "400ms" }}>d</span>
          </label>
        </div>
        <button className={classes.btn}>Login</button>
        <p className={classes.text}>
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
