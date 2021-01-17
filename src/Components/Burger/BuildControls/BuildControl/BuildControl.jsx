import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removeIngredientHandler}
        disabled={props.disabledInfo}
      >
        less
      </button>
      <button className={classes.More} onClick={props.addIngredientHandler}>
        more
      </button>
    </div>
  );
};

export default BuildControl;
