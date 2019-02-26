import React, { Component } from "react";
import { isValidEmailAddress } from "../../util/emailValidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../Auth/form.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
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
    let newUser = {
      username,
      password
    };

    if (
      !isValidEmailAddress(username) ||
      username.length === 0 ||
      password.length === 0
    ) {
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
            .post("http://localhost:8081/auth/register", newUser)
            .then(function(response) {
              console.log(response);
              localStorage.setItem("token", response.data.token);
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
          <h3 className="text-center mb-3">Register</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.username}
                name={"username"}
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
                name={"password"}
                onChange={this.handleChange}
              />
            </div>
          </form>

          <button
            onClick={this.handleSubmit}
            type="submit"
            className="mt-4 btn btn-info btn-lg"
          >
            Submit{" "}
            <span>
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </button>

          <div className="error-box mt-4">
            {!this.state.isValid ? (
              <h4 data-testid="error" className="text-center text-danger p-2">
                Please check your inputs and please try again{" "}
                <span>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                </span>
              </h4>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
