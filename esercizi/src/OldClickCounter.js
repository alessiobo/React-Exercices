
import React from "react";

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