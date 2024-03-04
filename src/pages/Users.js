import React, { useState } from "react";
import classes from "./Users.module.css";
import { Link } from "react-router-dom";
import helpLogo from "../assets/help-logo.png";
import MainNavigation from "../Components/MainNavigation";
import userLogo from "../assets/home-logo.png";
import searchIcon from "../assets/search-icon.jpg";

const Users = () => {
  const [query, setQuery] = useState("");
  const DUMMY_EMPLOYEES = [
    {
      id: 1,
      name: "Arjun",
      dob: "16-11-2000",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Mahesh",
      dob: "15-01-2000",
      role: "Web Developer",
    },
    {
      id: 3,
      name: "Rajesh",
      dob: "17-03-2000",
      role: "Data Analyst",
    },
    {
      id: 4,
      name: "Sakshi",
      dob: "18-06-2000",
      role: "Talent Acquisition",
    },
  ];

  const employeeSearchHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className={classes.users}>
        <div className={classes["help-logo"]}>
          <Link to="/">
            <img src={helpLogo} alt="help-logo" />
          </Link>
        </div>
        <div className={classes["user-logo"]}>
          <div className={classes["user-qty"]}>4</div>
          <img src={userLogo} alt="user-logo" />
        </div>
        <div className={classes["employee-search"]}>
          <input
            type="search"
            placeholder="Search with name"
            onChange={employeeSearchHandler}
          />
          <img
            src={searchIcon}
            alt="search-icon"
            className={classes["search-icon"]}
          />
        </div>
        <div className={classes["employee-list"]}>
          {DUMMY_EMPLOYEES.filter((employee) => {
            if (employee.name.charAt(0) === query) {
              return employee.name.includes(query);
            } else {
              return employee.name.toLowerCase().includes(query);
            }
          }).map((employee) => (
            <div className={classes.card} key={employee.id}>
              <p>
                EMP ID <span className={classes["col-1"]}>:</span> {employee.id}
              </p>
              <p>
                Name <span className={classes["col-2"]}>:</span> {employee.name}
              </p>
              <p>
                DOB <span className={classes["col-3"]}>:</span>{" "}
                <span className={classes.dob}>{employee.dob}</span>
              </p>
              <p>
                Role <span className={classes["col-4"]}>:</span>{" "}
                <span className={classes.role}>{employee.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <MainNavigation />
    </>
  );
};

export default Users;
