import React, { Component } from "react";
import "./Profile.scss";
import Cloudinary from "../Cloudinary/Cloudinary";
import axios from "axios";
import { connect } from "react-redux";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: "",
      newPassword: ""
    };
  }

  submitChanges = e => {
    e.preventDefault();
    localStorage.getItem("token") !== undefined &&
      this.props.picUrl !== "" &&
      axios
        .post(
          "http://localhost:8081/update",
          {
            oldpass: this.state.oldPassword,
            newpass: this.state.newPassword,
            newPicUrl: this.props.picUrl
          },
          { headers: { "user-auth-token": localStorage.getItem("jwtToken") } }
        )
        .then(res => {
          console.log(res);
        });
  };
  render() {
    console.log("token", localStorage.getItem("token"));
    console.log("props picUrl", this.props.picUrl);
    return (
      <div>
        <h1>Edit Profile</h1>
        <div>
          <img src={this.props.picUrl} width={50} />
          <h1>Name Goes Here</h1>
        </div>
        <form onSubmit={this.submitChanges} className="edit-form">
          <label>Old Password</label>
          <input
            type="password"
            onChange={e => this.setState({ oldPassword: e.target.value })}
          />
          <label>New Password</label>
          <input
            type="password"
            onChange={e => this.setState({ newPassword: e.target.value })}
          />
          <label>Change Photo</label>
          <Cloudinary component="userphoto" />
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
