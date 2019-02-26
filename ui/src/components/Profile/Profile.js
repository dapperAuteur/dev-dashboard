import React, { Component } from "react";
import "./Profile.scss";
import Cloudinary from "../Cloudinary/Cloudinary";
import axios from "axios";
import { connect } from "react-redux";

class Profile extends Component {
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

  submitChanges = e => {
    e.preventDefault();
    localStorage.getItem("token") !== undefined &&
      axios
        .post(
          "http://localhost:8081/update/",
          {
            oldpass: this.state.oldPassword,
            newpass: this.state.newPassword,
            newPicUrl: this.props.picUrl
          },
          { headers: { "user-auth-token": localStorage.getItem("token") } }
        )
        .then(res => {
          console.log(res);
        });
  };

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <div>
          <img src={this.props.picUrl} width={50} />
          <h1>Name Goes Here</h1>
        </div>
        <form onSubmit={this.submitChanges} className="edit-form">
          <label>Edit Name</label>
          <input name="name" type="text" value={this.state.name} onChange={e => this.newName(e.target.value)} />
          <label>New Password</label>
          <input name="password" type="password" />
          <label>Confirm Password</label>
          <input />
          <label>Change Photo</label>
          <Cloudinary />
          <button type="submit">SUBMIT CHANGES</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    picUrl: state.picUrl
  };
}
export default connect(mapStateToProps)(Profile);
