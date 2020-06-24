import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        firstname: '',
        lastname: '',
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state.user);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            ></input>
          </p>
          <p>
            <label htmlFor="firstname">First Name: </label>
            <input
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInput}
            ></input>
          </p>
          <p>
            <label htmlFor="lastname">Last Name: </label>
            <input
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
            ></input>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
