import React, { Component } from "react";
import "./Profile.scss";
import Cloudinary from "../Cloudinary/Cloudinary";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    };
  }

  newName = val => {
    this.setState({
      name: val
    });
  };

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <div>
          <img src="http://robohash.org/chris" width={50} />
          <h1>Name Goes Here</h1>
        </div>
        <form className="edit-form">
          <label>Edit Name</label>
          <input name="name" type="text" value={this.state.name} onChange={e => this.newName(e.target.value)} />
          <label>New Password</label>
          <input name="password" type="password" />
          <label>Confirm Password</label>
          <input />
          <label>Change Photo</label>
          <Cloudinary />
          <button>SUBMIT CHANGES</button>
        </form>
      </div>
    );
  }
}
