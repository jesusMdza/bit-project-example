import React from "react";
import styles from "./Button.module.scss";

const Button = () => {
  return (
    <button className={styles.button} onClick={() => alert("Button Clicked")}>
      Click Me!
    </button>
  );
};

export default Button;
