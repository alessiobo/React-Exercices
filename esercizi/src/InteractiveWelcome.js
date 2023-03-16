//Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current
//content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  handlerName = (event) => {
    const name = event.target.value;
    this.setState(() => {
      return { name: name };
    });
  };

  controlledName(name) {
    const back = name > 10 ? "il nome inserito ha troppi caratteri" : name;
    return back;
  }

  render (){
    return (
        <div>
            <input type= "text" onChange={this.handlerName}/>
            <Welcome name={this.controlledName(this.state.name)} />
        </div>
    )
  }
}
