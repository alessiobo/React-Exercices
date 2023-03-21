//Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each
//username entered. The usernames should be added to the array using an input field and a button.

import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [usernames, setUsernames] = useState([]);

  const handleAddUser = (event) => {
    event.preventDefault();

    const newUser = event.target.username.value;
    if (newUser !== "") {
      setUsernames([...usernames, newUser]);
    }
    event.target.username.value = "";
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="username" />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {usernames.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
