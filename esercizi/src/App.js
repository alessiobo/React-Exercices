// Add three Links within the main App component and use them to navigate to all three routes.

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <>
      <Link to="/">Go to welcome</Link> | <Link to="/counter">Go to counter</Link> | <Link to="/users/:username">Go to user</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Alessio" />} />{" "}
        <Route path="/counter" element={<Counter counter={0} />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}

export default App;