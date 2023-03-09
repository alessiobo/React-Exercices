// Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons,
// and track of which button was pressed last. Show the last button that was pressed in an h1 tag within
// the ClickTracker component. Tip: you can use the event object to access the target property of the event.

import React from "react";
import "./ClickTracker.css";

export class ClickTracker extends React.Component {
  state = { lastClick: "" };

  handleButtonClick = (event) => {
    const btnName = event.target.name;
    this.setState({
      lastClick: btnName,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <button name={"giraffe"} onClick={this.handleButtonClick}>
          Click Here
        </button>
        <button name={"hippo"} onClick={this.handleButtonClick}>
          Click Here
        </button>
        <button name={"leo"} onClick={this.handleButtonClick}>
          Click Here
        </button>
        <h1 className={`${this.state.lastClick}`}>
          In the jungle there is a {this.state.lastClick}
        </h1>
      </div>
    );
  }
}
