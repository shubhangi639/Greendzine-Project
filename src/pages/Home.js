import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import homeLogo from "../assets/home-logo.png";
import helpLogo from "../assets/help-logo.png";
import MainNavigation from "../Components/MainNavigation";

const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <div className={classes["help-logo"]}>
          <Link to="/">
            <img src={helpLogo} alt="help-logo" />
          </Link>
        </div>
        <div className={classes["home-logo"]}>
          <div className={classes["user-qty"]}>4</div>
          <img src={homeLogo} alt="home-img" />
        </div>
        <div className={classes.searchbox}>
          <input type="search" placeholder="Employee Productivity Dashboard" />
        </div>
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div className={classes["analysis-group"]}>
            <div className={classes.analysis}>
              <p>
                Productivity on Monday<span>4%</span>
              </p>
              <div className={classes["fill-1"]}></div>
            </div>

            <div className={classes.analysis}>
              <p>
                Productivity on Tuesday
                <span>92%</span>
              </p>
              <div className={classes["fill-2"]}></div>
            </div>

            <div className={classes.analysis}>
              <p>
                Productivity on Wednesday
                <span>122%</span>
              </p>
              <div className={classes["fill-3"]}></div>
            </div>

            <div className={classes.analysis}>
              <p>
                Productivity on Thursday
                <span>93%</span>
              </p>
              <div className={classes["fill-4"]}></div>
            </div>

            <div className={classes.analysis}>
              <p>
                Productivity on Friday
                <span>89%</span>
              </p>
              <div className={classes["fill-5"]}></div>
            </div>

            <div className={classes.analysis}>
              <p>
                Productivity on Saturday
                <span>98%</span>
              </p>
              <div className={classes["fill-6"]}></div>
            </div>
          </div>
        </div>
      </div>
      <MainNavigation />
    </>
  );
};

export default Home;
