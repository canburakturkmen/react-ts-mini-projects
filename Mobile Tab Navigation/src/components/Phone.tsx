import { useState } from "react";
import classes from "./Phone.module.css";

const IMAGE_URLS = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
];
const Phone = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={classes.phone}>
      {IMAGE_URLS.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="landscape"
          className={`${classes.content} ${
            activeTab === index ? classes.show : ""
          }`}
        />
      ))}
      <nav>
        <ul>
          <li
            className={`${activeTab === 0 ? classes.active : ""}`}
            onClick={() => {
              setActiveTab(0);
            }}
          >
            <i className="fas fa-home"></i>
            <p>Home</p>
          </li>
          <li
            className={`${activeTab === 1 ? classes.active : ""}`}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            <i className="fas fa-box"></i>
            <p>Work</p>
          </li>
          <li
            className={`${activeTab === 2 ? classes.active : ""}`}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            <i className="fas fa-book-open"></i>
            <p>Blog</p>
          </li>
          <li
            className={`${activeTab === 3 ? classes.active : ""}`}
            onClick={() => {
              setActiveTab(3);
            }}
          >
            <i className="fas fa-users"></i>
            <p>About Us</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Phone;
