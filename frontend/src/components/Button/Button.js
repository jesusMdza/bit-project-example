import React from "react";
import styles from "./Button.module.scss";

const Button = () => {
  return (
    <div className={styles.button} onClick={() => alert("Button Clicked")}>
      Click Me!
    </div>
  );
};

export default Button;
