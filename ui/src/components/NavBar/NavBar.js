import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { connect } from 'react-redux';
import Search from '../Search/Search';

const NavBar = props => {
  return (
    <header>
      <Search />

      <div className="filter">
        {/* {props.tags} */}
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

      <img className="user" src={props.user ? props.user.image : "http://robohash.org/chris"} />
    </header>
  );
};

export default connect(state => state.user)(NavBar);
