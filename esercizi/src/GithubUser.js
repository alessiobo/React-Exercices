import React, { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
            const jsonData = await response.json();
            setUser(jsonData);
          }catch(error){
            setError(error);
          }
        }  
    getData();
  }, [username]);

  if (error) {
    return <div>There's an error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>{user.name}</h4>
      <img src={user.avatar_url} />
    </div>
  );
}

export default GithubUser;