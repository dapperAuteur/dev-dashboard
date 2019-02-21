import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { connect } from 'react-redux';
import Search from '../Search/Search';

const NavBar = props => {
  return (
    <header>
      <Search />

      <div className="filter">{/* {props.tags} */}</div>
    </header>
  );
};

export default connect(state => state.user)(NavBar);
