import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList
          render={(items, handlerRemove) => {
            return <ul>
              {items.map((item, index) => (
                <li key={item + index}>
                  {item}
                  <button onClick={()=> handlerRemove(index)}>-</button>
                </li>
              ))}
            </ul>
          }}
        />
      </div>
    );
  }
}

export default App;