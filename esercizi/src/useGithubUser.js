// Modify the useGithubUser hook so that, if the username is null, no request is made.

import useSWR from "swr";

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  const fetchGithubUser = () => {
    mutate();
  };

  return {
    data,
    error,
    isLoading: !data && !error,
    onFetchUser: fetchGithubUser,
  };
}

export default useGithubUser;
