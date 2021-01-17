import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import SideDrower from "../Navigation/SideDrower/SideDrower";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
class Layout extends Component {
  state = {
    showSideDrower: true,
  };
  sideDrowerClosedHandler = () => {
    this.setState({ showSideDrower: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
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
