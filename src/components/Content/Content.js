import React from "react";

import classes from "./Content.module.css";

const content = (props) => {
  return (
    <div className={classes.content}>
      <h4>{props.title}</h4>
    </div>
  );
};

export default content;
