import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import classes from "./UserFeed.module.css";

const url = "https://randomuser.me/api?results=50";

const UserFeed = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [filterText, setFilterText] = useState("");
  const { isLoading, error, sendRequest } = useHttp();

  const setUsersData = (data: any) => {
    setUsers(data.results);
  };

  const filterInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterText = e.target.value;
    if (filterText.length < 1) return;
    setFilterText(filterText);
  };

  const checkHide = (username: string) => {
    if (!username.toLowerCase().includes(filterText.toLowerCase()))
      return classes.hide;
  };

  useEffect(() => {
    sendRequest(url, {}, setUsersData);
  }, [sendRequest]);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h4 className={classes.title}>Live User Filter</h4>
        <small className={classes.subtitle}>Search users by name</small>
        <input
          type="text"
          id="filter"
          placeholder="Search"
          onChange={(e) => {
            filterInputChangeHandler(e);
          }}
        />
      </header>
      <ul className={classes["user-list"]}>
        {isLoading && <span className={classes.loading}>Loading...</span>}
        {error && (
          <span className={classes.error}>
            Oops... <br />
            Something went wrong.
          </span>
        )}
        {!isLoading &&
          users.map((user, index) => (
            <li
              key={index}
              className={`${
                filterText.length > 0 &&
                checkHide(`${user.name.first} ${user.name.last}`)
              }`}
            >
              <img
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <div className={classes["user-info"]}>
                <h4>{`${user.name.first} ${user.name.last}`}</h4>
                <p>{`${user.location.city}, ${user.location.country}`}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserFeed;
