import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { connect } from "react-redux";
import Search from "../Search/Search";

const NavBar = props => {
  return (
    <header>
      <Search />

      <div className="filter">{/* {props.tags} */}</div>

      <img className="user" src={props.user ? props.user.image : "http://http.cat/400"} />
    </header>
  );
};

export default connect(state => state.user)(NavBar);
