//Add a "login" button to the Login component. This button should be disabled as long as the username and password
//inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed
//as a prop to the Login component, passing it the state.

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
    const data = {
      username: this.state.username,
      password: this.state.password,
      accept: this.state.remember,
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
      </form>
    );
  }
}
