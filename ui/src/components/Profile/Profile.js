import React, { Component } from "react";
import request from "superagent";
import Dropzone from "react-dropzone";
import "./Profile.scss";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "ylamraku";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/devdash54321/image/upload";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      oldPassword: "",
      newPassword: "",
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ""
    };
  }

  onImageDrop(file) {
    this.setState({
      uploadedFile: file[0]
    });

    this.handleUpload(file[0]);
  }

  handleUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);
    upload.end((err, res) => {
      if (err) {
        console.log("err", err);
      }
      if (res.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: res.body.secure_url
        });
      }
    });
  }

  submitChanges = () => {
    // if(this.state.oldPassword === )
    // axios.post()
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
          <label>Old Password</label>
          <input
            type="password"
            onChange={e => this.setState({ oldPassword: e.target.value }, () => console.log(this.state.oldPassword))}
          />
          <label>New Password</label>
          <input
            type="password"
            onChange={e => this.setState({ newPassword: e.target.value }, () => console.log(this.state.newPassword))}
          />
          <label>Change Photo</label>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}
            className="fileBox"
            uploadedFileCloudinaryUrl={this.state.uploadedFileCloudinaryUrl}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="upload-pic">
                UPLOAD
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          {this.state.uploadedFile === null ? (
            <div className="file-name" />
          ) : (
            <div className="file-name">{this.state.uploadedFile.name}</div>
          )}
          <button>SUBMIT CHANGES</button>
        </form>
      </div>
    );
  }
}
