//Modify the TodoList component so that the input clears every time a Todo is added to the items array.

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
          <input
            type="text"
            value={newItem}
            onChange={this.handleNewItemChange}
          />
          <button onClick={this.handleAddItem}>Add Item</button>
        </div>
      </div>
    );
  }
}
