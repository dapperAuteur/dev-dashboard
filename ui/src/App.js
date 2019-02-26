import React, { Component } from 'react';
// import "./reset.css";
import 'normalize.css';
import './App.css';
import { connect } from 'react-redux';
import { getTags } from './ducks/reducer';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';

import router from './router';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:8081/tags');
    this.props.getTags(data);
    console.log(data);
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {router}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tags: state.tags };
};

export default connect(
  mapStateToProps,
  { getTags }
)(App);
