// Modify the Counter component so that the interval is initialized within the componentDidMount life cycle
// method instead of the constructor. Is the constructor still required?

import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = { count: this.props.value };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + this.props.amount });
    }, this.props.interval);
  }
  
  render() {
    return (
      <h1>
        <CounterDisplay count={this.state.count} />
      </h1>
    );
  }
}
