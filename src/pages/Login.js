import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/login-logo.png";
import classes from "./Login.module.css";
import useInput from "../hooks/use-input";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    inputIsTouched: emailInputIsTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(
    (value) =>
      value.includes("@") && value.charAt(0) !== "." && value.trim().length > 4
  );

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    inputIsTouched: passwordInputIsTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (enteredEmail === "abc@gmail.com" && enteredPassword === "password") {
      navigate("/home");
    } else {
      setError(true);
    }

    resetEmail();
    resetPassword();
    console.log(enteredEmail, enteredPassword);
  };

  const emailInputClasses = emailInputIsTouched
    ? classes["form-control"] && classes.invalid
    : classes["form-control"];

  const passwordInputClasses = passwordInputIsTouched
    ? classes["form-control"] && classes.invalid
    : classes["form-control"];

  return (
    <div className={classes.login}>
      <div className={classes.logo}>
        <img src={loginimg} alt="login-img" />
        <p>We are Electric</p>
      </div>
      <form onSubmit={submitHandler} autoComplete="off">
        {error && <p className={classes["error-text"]}>Wrong credentials.</p>}
        <div className={classes["form-group"]}>
          <div className={emailInputClasses}>
            <input
              type="email"
              name="email"
              value={enteredEmail}
              placeholder="E-mail"
              onChange={emailChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputIsTouched && (
              <p className={classes["error-text"]}>
                Please enter a valid email
              </p>
            )}
          </div>

          <div className={passwordInputClasses}>
            <input
              type="password"
              name="password"
              value={enteredPassword}
              placeholder="Password"
              onChange={passwordChangeHandler}
              onBlur={passwordInputBlurHandler}
            />
            {passwordInputIsTouched && (
              <p className={classes["error-text"]}>
                Please enter your password
              </p>
            )}
          </div>

          <div className={classes["form-actions"]}>
            <button disabled={!formIsValid}>Login</button>
            <p>Forgot Password?</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
