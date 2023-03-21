//Rewrite the Login component from Forms 03 as a function component, and use the useState hook to track the state of the
//username, password and remember inputs. Tip: you can use useState more than once.

import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleChangeInput(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  console.log(data);

  return (
    <form>
      <input
        onChange={handleChangeInput}
        value={data.username}
        name="username"
      />
      <input
        onChange={handleChangeInput}
        value={data.password}
        type="password"
        name="password"
      />
      <input
        onChange={handleChangeInput}
        checked={data.remember}
        type="checkbox"
        name="remember"
      />
    </form>
  );
}
