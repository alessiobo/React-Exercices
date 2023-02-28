import React from "react";

export class Welcome extends React.Component {
  render() {
    const name = this.props.name

    return (
      <div>
        <p>Welcome, {name}!</p>
        <p>Your age is: {this.props.age}</p>
      </div>
    );
  }
}
