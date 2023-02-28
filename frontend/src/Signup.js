import React, { Component } from "react";
import logo from "./assets/logo.png";


class Signup extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if(!e.target.name.value){
      alert("Please enter your name")
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456" &&
      e.target.name.value === "Bob"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.name.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div>
        <img src={logo}/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text"/>
          </div>
          <button>Login</button>
        </form>
        <button onClick={this.handleClick}>
          Create a new account
        </button>
      </div>
    );
  }
}

export default Signup;