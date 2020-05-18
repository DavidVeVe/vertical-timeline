import React from "react";

import classes from "./Icon.module.css";

const icon = (props) => {
  return (
    <span className={classes.icon}>
      <span
        className={[
          classes.filling,
          props.isActive ? classes.active : classes.inactive,
        ].join(" ")}
      ></span>
    </span>
  );
};

export default icon;
