import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENUE</div>
      <Logo height="80%" marginBottom="0" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
