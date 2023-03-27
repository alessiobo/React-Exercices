// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter as well as three functions to increment,
// decrement and reset the counter.
import { useState } from "react";

function UseCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default UseCounter;