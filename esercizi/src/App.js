// Add a Not Found route that renders when a user navigates to a path that does not exist.

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <>
      <Link to="/">Go to welcome</Link> |{" "}
      <Link to="/counter">Go to counter</Link> |{" "}
      <Link to="/users/:username">Go to user</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Alessio" />} />
        <Route path="/counter" element={<Counter counter={0} />} />
        {/* <Route path="/users/:username" element={<ShowGithubUser />} /> */}
        <Route path="*" element={
            <div>
              <h3>NOT FOUND</h3>
              <Link to="/">Go Back</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;