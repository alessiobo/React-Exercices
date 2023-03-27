import React from "react";
import useGitHubUser from "./useGitHubUser";

export function GitHubUser({ username }) {
  const data = useGitHubUser(username);

  return <div>{data && <h1>{data.name}</h1>}</div>;
}
