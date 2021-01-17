import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            type={control.type}
            addIngredientHandler={() =>
              props.addIngredientHandler(control.type)
            }
            removeIngredientHandler={() =>
              props.removeIngredientHandler(control.type)
            }
            disabledInfo={props.disabledInfo[control.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchaseHandler}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
