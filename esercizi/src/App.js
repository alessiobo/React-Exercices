// Create an App component that wraps a Routes component 
// and add a single Route to the / path that renders the Welcome component from Function Components 01,
// passing it a name prop. Render the App component within a BrowserRouter component.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="John" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
