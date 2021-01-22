import React, { Component } from "react";
import Aux from "../AUX/Aux";
import SideDrower from "../../Components/Navigation/SideDrower/SideDrower";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
class Layout extends Component {
  state = {
    showSideDrower: false,
  };
  sideDrowerClosedHandler = () => {
    this.setState({ showSideDrower: false });
  };

  sideDrowerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrower: !prevState.showSideDrower };
    });
    console.log("clicked");
  };

  render() {
    return (
      <Aux>
        <Toolbar drowerToggleClicked={this.sideDrowerToggleHandler} />
        <SideDrower
          open={this.state.showSideDrower}
          closed={this.sideDrowerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
