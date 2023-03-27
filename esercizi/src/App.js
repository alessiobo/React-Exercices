// Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from useEffect 03 by passing it the received username.

import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <Routes>
      <Route path="users/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}

export default App;