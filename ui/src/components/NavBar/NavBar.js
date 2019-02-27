import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import { connect } from 'react-redux';
import Search from '../Search/Search';

const NavBar = props => {
  const token = localStorage.getItem('jwtToken');
  return (
    <header>
      <Search />

      <div className="filter">
        {/* {props.tags} */}
        <ul>
          {!token ? (
            <div>
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
            </div>
          ) : (
            <div>
              <li>
                <NavLink className="navlink" to="/add-issue">
                  Add Issue
                </NavLink>
              </li>
              <li>
                <button
                  className="btn btn-danger"
                  onClick={() => localStorage.clear()}
                >
                  Logout
                </button>
              </li>
            </div>
          )}
        </ul>
        <br />
        <h3>Language</h3>
        <ul>
          {props.tags &&
            props.tags.map(tag => <li key={tag._id}>{tag.tagName}</li>)}
        </ul>
      </div>
      {props.user && <div>Hi, {props.user.name}</div>}
      <img
        className="user"
        src={props.user ? props.picUrl : 'http://robohash.org/chris'}
      />
    </header>
  );
};
function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
    picUrl: state.picUrl,
    tags: state.otherReducer.tags
  };
}
export default connect(mapStateToProps)(NavBar);
