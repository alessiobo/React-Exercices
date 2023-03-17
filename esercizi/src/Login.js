// Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted 
// password's length is shorter than 8 characters, green otherwise.

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

  render() {

     const SubmitStyle = {
        backgroundColor: this.state.password.length < 8 ? "red" : "green"
     }

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
        <button type="submit" disabled={this.state.disabled} style={SubmitStyle}>
          Sign In
        </button>
      </form>
    );
  }
}
