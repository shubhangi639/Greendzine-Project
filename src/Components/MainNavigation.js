import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUserLarge } from "react-icons/fa6";

const MainNavigation = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <div className={classes.navbar}>
        <nav>
          <div className={classes.link}>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <ImHome size={25} />
              </NavLink>
            </li>
          </div>
          <div className={classes.link}>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <FaUserLarge size={25} />
              </NavLink>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
