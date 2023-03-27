// Modify the TodoList component so that, instead of rendering the items array within the ul tag, 
//it calls the function passed to its render prop, passing it the items array as a parameter, 
//as well as the function required to delete the item. Pass a render prop to the TodoList component 
//to correctly render and interact with the items array.

import React, { Component } from "react";

class TodoList extends Component {
  state = {
    items: [],
    value: "",
  };


  handlerInput = (event) => {
    const addValue = event.target.value;
    this.setState({ value: addValue });
  };

  handlerAdd = () => {
    this.setState({ items: [...this.state.items, this.state.value] });
    this.setState({ value: "" });
  };

  handlerReset = () => {
    this.setState({ items: [], value: "" });
  };

  handlerRemove = (index) => {
    const newItems = this.state.items.filter((item, i) => i !== index);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div>
        <h3>List</h3>
        {/* <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>
              {item}
              <button onClick={this.handlerRemoveItem(item)}>-</button>
            </li>
          ))}
        </ul> */}
        {this.props.render(this.state.items, this.handlerRemove)} 
        <input
          type="text"
          value={this.state.value}
          onChange={this.handlerInput}
        />
        <button onClick={this.handlerAdd}>+</button>
        <button onClick={this.handlerReset}>Reset</button>
      </div>
    );
  }
}

export default TodoList;