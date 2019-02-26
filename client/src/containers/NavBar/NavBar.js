import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";
import { connect } from "react-redux";
import Search from "./../../components/Search/Search";

const NavBar = props => {
  console.log("props", props);
  return (
    <header>
      <Search />

      <div className="filter">
        {/* {props.tags} */}
        <Router>
          <ul>
            <li>
              <NavLink className="navlink" to="/sign-in">
                Sign in{" "}
                <span>
                  <FontAwesomeIcon icon={faSignInAlt} />
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink className="navlink" to="/sign-up">
                Sign up{" "}
                <span>
                  <FontAwesomeIcon icon={faUserPlus} />
                </span>
              </NavLink>
            </li>
          </ul>
        </Router>
        <br />
        <h3>Language</h3>
        <ul>
          <li>Javascript</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
        <h3>Time</h3>
        <ul>
          <li>3hrs</li>
          <li>6hrs</li>
          <li>12hrs</li>
          <li>24hrs</li>
        </ul>
      </div>

      <img
        className="user"
        alt="user profile"
        src={props.user ? props.user.image : "http://robohash.org/chris"}
      />
    </header>
  );
};

const mapStateToProps = state => {
  console.log("state.authUser", state.authUser);
  return {
    user: state.authUser
  };
};

export default connect(mapStateToProps)(NavBar);
