//Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove
//corresponding item from the items array.

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

  handleRemoveItem = (index) => {
    const { items } = this.state;
    const newItems = [...items];
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  };

  render() {
    const { items, newItem } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              {item}
              <button onClick={() => this.handleRemoveItem(i)}>Remove</button>
            </li>
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
