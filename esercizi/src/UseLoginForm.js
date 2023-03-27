// Create a custom hook that keeps track of the state of a controlled
// form with the username and password inputs, and returns the current value of the
// inputs as well as an event handler to update either input.

import { useState } from 'react';

function useLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
  };
}

export default useLoginForm;
