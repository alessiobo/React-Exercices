//Create a Login component containing three inputs: a username input, a password input and a remember checkbox.
//All three inputs should be controlled components.
import React from "react";

export class Login extends React.Component {
        state = {
          username: "",
          password: "",
          remember: false,
        };
      
        inputHandler = (event) => {
          event.preventDefault();
          console.log(this.state);
        };
      
        inputChangeHandler = (event) => {
          const { name, type, value, checked } = event.target;
      
          const val = type === "checkbox" ? checked : value;
      
          this.setState(() => {
            return { [name]: val };
          });
        };
      
        render() {
          return (
            <form onSubmit={this.inputHandler}>
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
              <button type="submit">Sign In</button>
            </form>
          );
        }
      }
      
