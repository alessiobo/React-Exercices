import React from "react";
import { GitHubUser } from "./GitHubUser";

function App() {
  const username = "alessiobo";
  return (
    <div>
      <GitHubUser username={username} />
    </div>
  );
}

export default App;
