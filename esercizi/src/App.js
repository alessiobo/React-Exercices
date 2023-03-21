import React from "react";
import { ClickCounter } from "./ClickCounter";


class App extends React.Component {
  handleCounterChange = (counter) => {
    console.log(`Counter changed to ${counter}`);
  };

  render() {
    return (
      <div>
        <ClickCounter onCounterChange={this.handleCounterChange} />
      </div>
    );
  }
}

export default App;