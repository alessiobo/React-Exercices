//Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable.
//The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button.
//When the button is clicked, the event handler should add the value of the input tag to the items array.

import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: "",
    };
  }

  handleNewItemChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handleAddItem = () => {
    const { items, newItem } = this.state;
    this.setState({ items: [...items, newItem], newItem: "" });
  };

  render() {
    const { items, newItem } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div>
            <input type='text' value={newItem} onChange={this.handleNewItemChange} />
            <button onClick={this.handleAddItem}>Add Item</button>
        </div>
      </div>
    );
  }
}
