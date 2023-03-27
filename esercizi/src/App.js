import CarDetails from "./CarDetails";
import React, { useState } from "react";

function App() {
  const car1 = {
    modello: "sportivo",
    anno: 2000,
    colore: "#9E0A0A",
  };
  const car2 = {
    modello: "berlina",
    anno: 2005,
    colore: "#0A2BEF",
  };
  const car3 = {
    modello: "coupè",
    anno: 1950,
    colore: "#006FE6",
  };

  return (
    <div>
      <CarDetails initialData={car2} />
    </div>
  );
}

export default App;
