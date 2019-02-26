import React, { Component } from "react";
import PropTypes from "prop-types";
import { createNewUser } from "./../../actions/securityActions";
import { connect } from "react-redux";
import { isValidEmailAddress } from "../../secureUtils/emailValidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import "./../Auth/form.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      errors: {},
      profilePicture: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log("this.props", this.props);
    if (this.props.security.validToken) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      profilePicture: this.state.profilePicture
    };
    console.log("newUser", newUser);
    this.props.createNewUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="text-center mb-3">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback"> {errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback"> {errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirmPassword
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {" "}
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);
