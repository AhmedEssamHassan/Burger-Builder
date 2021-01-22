import React from "react";
import Aux from "../../../hoc/AUX/Aux";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrower.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";

const SideDrower = (props) => {
  let attatchedClasses = [classes.SideDrower, classes.Close];
  if (props.open) {
    attatchedClasses = [classes.SideDrower, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attatchedClasses.join(" ")}>
        <Logo height="11%" marginBottom="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrower;
