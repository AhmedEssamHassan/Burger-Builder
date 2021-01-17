import React from "react";
import logo from "../../assets/images/28.1 burger-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height, marginBottom: props.marginBottom }}
    >
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
