import React, { Component } from "react";
import PropTypes from "prop-types";
import { login } from "./../../actions/securityActions";
import { connect } from "react-redux";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isValidEmailAddress } from "../../util/emailValidator";
import {
  faArrowUp,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import "../Auth/form.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("loginRequest", loginRequest);
    this.props.login(loginRequest);
    console.log("after loginRequest");
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="border register-main">
        <div className="border2">
          <h1 className="text-center mb-3">Log In</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
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
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
