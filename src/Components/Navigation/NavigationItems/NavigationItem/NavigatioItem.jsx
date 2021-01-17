import React from "react";
import classes from "./NavigatioItem.module.css";

const NavigatioItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigatioItem;
