// Modify the Container component so that it can display a title received within the title prop.

import React from "react";
import "./Container.css";

export class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-title">{this.props.title}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
