import React from "react";
import NavigatioItem from "./NavigationItem/NavigatioItem";
import classes from "./NavigationItems.module.css";
const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigatioItem link="/" active>
        BurgerBuilder
      </NavigatioItem>
      <NavigatioItem link="/">checkout</NavigatioItem>
    </ul>
  );
};

export default NavigationItems;
