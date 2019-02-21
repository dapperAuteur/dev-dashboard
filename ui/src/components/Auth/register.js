import React, { Component } from 'react';
import '../Auth/form.css';

class Register extends Component {
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
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
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
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
