import React, { Component } from 'react';
import axios from 'axios';
import '../Auth/form.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isValid: null
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let { username, password } = this.state;
    let user = {
      username,
      password
    };

    axios
      .post('http://localhost:8081/auth/login', user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="user-box">
        <div>
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={this.state.username}
                name={'username'}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                name={'password'}
                onChange={this.handleChange}
              />
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
