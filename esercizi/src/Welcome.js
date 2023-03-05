import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div>
        <p>Welcome, {name}!</p>
        <Age age={this.props.age} />
      </div>
    );
  }
}
