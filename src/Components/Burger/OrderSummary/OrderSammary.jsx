import React, { Component } from "react";
import Aux from "../../../hoc/AUX/Aux";
import Button from "../../UI/Button/Button";

class OrderSammary extends Component {
  componentDidUpdate() {
    console.log("[prderSammary] will update");
  }

  render() {
    const ingredientsSammary = Object.keys(this.props.ingredients).map(
      (key) => {
        return (
          <li key={key}>
            <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
            {this.props.ingredients[key]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientsSammary}</ul>
        <strong>
          <p>this costs {this.props.cost.toFixed(2)}$</p>
        </strong>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanclled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSammary;
