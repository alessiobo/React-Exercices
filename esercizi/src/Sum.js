//What happens if the numbers prop of the Sum component is not set? 
 // Numbers è undfined

//How can you set a default value for this prop?

import React from "react";

const Sum = ({ numbers = [3, 6, 9] }) => {
  const result = numbers.reduce((a, b) => a + b, 0);
  return <h1>La somma è: {result}</h1>;
};

export default Sum;