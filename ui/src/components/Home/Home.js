import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

const Home = props => {
  return (
    <div className="home">
      <div className="links">
        <NavLink to="/dashboard" activeClassName="active">
          Dash
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
      </div>
      {props.children}
    </div>
  );
};

export default Home;
