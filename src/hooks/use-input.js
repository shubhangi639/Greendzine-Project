import React, { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(value);
  const inputIsTouched = !enteredValueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value: value,
    isValid: enteredValueIsValid,
    inputIsTouched,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
