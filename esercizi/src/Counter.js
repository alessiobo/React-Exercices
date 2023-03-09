import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = { count: this.props.value };

  constructor(props) {
    super(props);
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
