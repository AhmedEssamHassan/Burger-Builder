import React from "react";
import classes from "./DrowerToggle.module.css";
const DrowerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrowerToggle;
