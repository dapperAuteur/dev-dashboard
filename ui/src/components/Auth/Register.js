import React, { Component } from "react";
import { isValidEmailAddress } from "../../util/emailValidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import "../Auth/form.css";
import { createNewUser } from "./../../actions/securityActions";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
  state = {
    username: "",
    password: "",
    profilePicture: "",
    isValid: true,
    errors: {}
  };

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let { username, password, profilePicture } = this.state;
    let newUser = {
      username,
      password,
      profilePicture
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
          this.props.createNewUser(newUser);
        }
      );
    }
  };

  render() {
    const { errors } = this.state;
    console.log("errors", errors);
    return (
      <div className="border register-main">
        <div className="border2">
          <h3 className="text-center mb-3">Register</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.error
                })}
                placeholder="Email"
                value={this.state.username}
                name={"username"}
                onChange={this.handleChange}
              />
              {errors.error && (
                <div className="invalid-feedback"> {errors.error}</div>
              )}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.error
                })}
                placeholder="Password"
                value={this.state.password}
                name={"password"}
                onChange={this.handleChange}
              />
              {errors.error && (
                <div className="invalid-feedback"> {errors.error}</div>
              )}
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

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);
