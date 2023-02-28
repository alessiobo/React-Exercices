import React from "react";

export class Welcome extends React.Component {
  render() {

    const name = this.props.name
    const mic = name === undefined || name === '' ? 'New User' : name

    return (
      <div>
        <p>Welcome, {mic}!</p>
        <p>Your age is: {this.props.age}</p>
      </div>
    );
  }
}
