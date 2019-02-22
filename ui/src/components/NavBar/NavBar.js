import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import { connect } from 'react-redux';
import Search from '../Search/Search';

const NavBar = props => {
  return (
    <header>
      <Search />

      <div className="filter">
        {/* {props.tags} */}
        <ul>
          <li>
            <NavLink className="navlink" to="/signin">
              Sign in{' '}
              <span>
                <FontAwesomeIcon icon={faSignInAlt} />
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink className="navlink" to="/signup">
              Sign up{' '}
              <span>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
            </NavLink>
          </li>
        </ul>
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
        src={props.user ? props.user.image : 'http://robohash.org/chris'}
      />
    </header>
  );
};

export default connect(state => state.user)(NavBar);
