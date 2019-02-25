import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../Auth/form.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isValid: true
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

    if (username.length === 0 || password.length === 0) {
      this.setState({
        isValid: false
      });
    } else {
      this.setState(
        {
          isValid: true
        },
        () => {
          axios
            .post('http://localhost:8081/auth/login', user)
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      );
    }
  };

  render() {
    return (
      <div className="border register-main">
        <div className="border2">
          <h3 className="text-center mb-3">Login</h3>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.username}
                name={'username'}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                name={'password'}
                onChange={this.handleChange}
              />
            </div>
          </form>

          <button
            onClick={this.handleSubmit}
            type="submit"
            className="mt-4 btn btn-info btn-lg"
          >
            Submit{' '}
            <span>
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </button>

          <div className="error-box mt-4">
            {!this.state.isValid ? (
              <h4 className="text-center text-danger p-2">
                Username or password is invalid, please try again{' '}
                <span>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </span>
              </h4>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;