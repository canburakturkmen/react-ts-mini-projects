import React, { useState } from "react";

function App() {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <button
        className="nav-btn open-btn"
        onClick={() => {
          setNavActive(true);
        }}
      >
        <i className="fas fa-bars"></i>
      </button>

      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
        alt="Logo"
        className="logo"
      />
      <p className="text">Mobile Navigation</p>

      <div className={`nav ${navActive && "visible"} nav-black`}>
        <div className={`nav ${navActive && "visible"} nav-red`}>
          <div className={`nav ${navActive && "visible"} nav-white`}>
            <button
              className="nav-btn close-btn"
              onClick={() => {
                setNavActive(false);
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
              alt="Logo"
              className="logo"
            />
            <ul className="list">
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a href="#">Worklife balance</a>
                  </li>
                  <li>
                    <a href="#">Inclusion & diversity</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
