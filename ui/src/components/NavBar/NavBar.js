import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <header>
      <input type="text" className="search" placeholder="Search" />
      <div className="user">{props.user.image}</div>
    </header>
  );
};

export default connect(state => state.user)(NavBar);
