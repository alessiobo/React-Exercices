// Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.

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