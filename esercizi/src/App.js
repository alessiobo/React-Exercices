import React from "react";
import UseCounter from "./UseCounter";

function App() {
  const { count, increment, decrement, reset } = UseCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
