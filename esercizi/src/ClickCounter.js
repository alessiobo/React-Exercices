// Create a ClickCounter class component that increments a counter every time a user clicks on a button.
// Render both the current value of the counter and the button within the ClickCounter component.

import React from "react";
import "./ClickCounter.css";

export class ClickCounter extends React.Component {
  state = { counter: 0 };

  handleIncrementBtn = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.handleIncrementBtn}>Add one</button>
        <div className="wrapped">{this.state.counter}</div>
      </div>
    );
  }
}
