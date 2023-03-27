import { useState, useCallback } from "react";

function UseCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(count => count + 1), []);
  const decrement = useCallback(() => setCount(count => count - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

export default UseCounter;
