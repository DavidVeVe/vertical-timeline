import React from "react";
import classes from "./Date.module.css";

const date = (props) => {
  return <span className={classes.date}>{props.date}</span>;
};

export default date;
