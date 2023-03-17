//Modify the TodoList by adding a "reset" button that clears the items array when clicked.

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

  handleResetList = () => {
    this.setState({ items: [] });
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
          <button onClick={this.handleResetList}>Reset Item</button>
        </div>
      </div>
    );
  }
}
