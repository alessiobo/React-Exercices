//Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function
//with the current value of the counter every time value of the counter changes. The function should be received as a prop.

import React, { useEffect, useState } from "react";

export function ClickCounter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    onCounterChange(counter);
  }, [counter, onCounterChange]);

  const handleIncrementBtn = () => {
    setCounter(counter + 1);
  };

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrementBtn}>Increment</button>
    </div>
  )
}
