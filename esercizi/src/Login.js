//Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    disabled: true,
  };

  onLogin = (event) => {
    event.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      return false;
    }

    const data = {
      username: this.state.username,
      password: this.state.password,
      remember: this.state.remember,
    };

    this.props.onLogin(data);
  };

  inputChangeHandler = (event) => {
    const { name, type, value, checked } = event.target;

    const val = type === "checkbox" ? checked : value;

    this.checkInput();

    this.setState(() => {
      return { [name]: val };
    });
  };

  checkInput = () => {
    if (this.state.username === "" || this.state.password === "") {
      this.setState(() => {
        return { disabled: true };
      });
    } else {
      this.setState(() => {
        return { disabled: false };
      });
    }
  };

  resetHandler = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        username: "",
        password: "",
        remember: false,
        disabled: true,
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <label>Username:</label>
        <input
          name={"username"}
          value={this.state.username}
          onChange={this.inputChangeHandler}
          type={"text"}
        />
        <label>Password:</label>
        <input
          name={"password"}
          value={this.state.password}
          onChange={this.inputChangeHandler}
          type={"password"}
        />
        <label>Remember Me:</label>
        <input
          name={"remember"}
          checked={this.state.remember}
          onChange={this.inputChangeHandler}
          type={"checkbox"}
        />
        <button type="submit" disabled={this.state.disabled}>
          Sign In
        </button>
        <button onClick={this.resetHandler}>Reset</button>
      </form>
    );
  }
}
