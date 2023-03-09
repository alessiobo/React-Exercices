// Modify the Counter component so that the initial value of the counter, the increment interval 
// and the increment amount are passed as props to the component.

import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.value };

    setInterval(() => {
      this.setState({ count: this.state.count + this.props.amount });
    }, this.props.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;
