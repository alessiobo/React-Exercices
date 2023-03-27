// Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of
// the user and the error and loading states.
import { useState } from 'react';

export function useGitHubUser(username) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchUser() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }

  return {
    data,
    error,
    loading,
    fetchUser
  };
}

