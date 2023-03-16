//Implement an UncontrolledLogin component that implements all the operations of the Login component,
//but does so using uncontrolled components.

import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  submitHandler = (event) => {
    event.preventDefault();

    const { username, password, check } = this._formRef.current.elements;

    const data = {
      username: username.value,
      password: password.value,
      check: check.checked,
    };

    this.props.onLogin(data);
  };

  checkDisabledButton = () => {
    const { username, password, submit } = this._formRef.current.elements;

    if (username.value !== "" && password.value !== "") {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  };

  render() {
    return (
      <form ref={this._formRef} onSubmit={this.submitHandler}>
        <label>Username:</label>
        <input
          name="username"
          type={"text"}
          onChange={this.checkDisabledButton}
        />
        <label>Password:</label>
        <input
          name="password"
          type={"password"}
          onChange={this.checkDisabledButton}
        />
        <label>Accept:</label>
        <input name="check" type={"checkbox"} />
        <button type="submit" name="submit" disabled={true}>
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
