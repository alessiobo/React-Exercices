import { useEffect } from 'react';
import { useGitHubUser } from './useGitHubUser';

export function GitHubUser({ username }) {
    const { data, error, loading, fetchUser } = useGitHubUser(username);
  
    useEffect(() => {
      fetchUser();
    }, [fetchUser]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return null;
    }
  
    return (
      <div>
        <h1>{data.name}</h1>
      </div>
    );
  }
  
