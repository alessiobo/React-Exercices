import React, { useState } from "react";

function Counter({ counter = 0 }) {
  const [stateCounter, setStateCounter] = useState(counter);

  function handleIncrementBtn() {
    setStateCounter((prevState) => prevState + 1);
  }

  return (
    <div className="upContainer">
      <button onClick={handleIncrementBtn}>Up</button>
      <div>{stateCounter}</div>
    </div>
  );
}

export default Counter;