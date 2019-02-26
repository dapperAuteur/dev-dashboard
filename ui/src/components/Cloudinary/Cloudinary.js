import React, { Component } from "react";
import request from "superagent";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { userPhoto, issuePhoto } from "../../ducks/reducer";
import "./Cloudinary.scss";

const CLOUDINARY_UPLOAD_PRESET = "ylamraku";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/devdash54321/image/upload";

class Cloudinary extends Component {
  constructor() {
    super();
    this.state = {
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
        if (this.props.component === "userphoto") {
          this.props.userPhoto(res.body.secure_url);
        } else if (this.props.component === "issuephoto") {
          this.props.issuePhoto(res.body.secure_url);
        }
      }
    });
  }
  render() {
    console.log(this.props.picUrl);
    console.log(this.props);
    return (
      <div>
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
        {this.state.uploadedFile === null ? <div className="file-name" /> : <div className="file-name">{this.state.uploadedFile.name}</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    picUrl: state.picUrl,
    issuePic: state.issuePic
  };
}
export default connect(
  mapStateToProps,
  { userPhoto, issuePhoto }
)(Cloudinary);
