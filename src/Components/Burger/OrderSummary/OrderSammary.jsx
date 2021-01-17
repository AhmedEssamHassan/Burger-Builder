import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSammary = (props) => {
  const ingredientsSammary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  console.log(ingredientsSammary);
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientsSammary}</ul>
      <strong>
        <p>this costs {props.cost.toFixed(2)}$</p>
      </strong>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanclled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSammary;
