//Rewrite the ClickCounter component from Events 01 as a function component, and use the useState hook to
//track the state of the counter.

import React, { useState } from "react";

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrementBtn = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleIncrementBtn}>Increment</button>
      <div>{counter}</div>
    </div>
  );
}
