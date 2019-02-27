import React, { Component } from 'react';
import Code from '../Code/Code';
import './addIssue.scss';
import axios from 'axios';
import Cloudinary from '../Cloudinary/Cloudinary';
import { connect } from 'react-redux';

class AddIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      markdown: '',
      tags: [],
      search: '',
      issueImages: []
    };
  }

  handleTags = val => {
    let splitTags = val.split('#');
    splitTags.splice(0, 1);
    let trimTags = splitTags.map(tag => {
      return { tagName: tag.trim() };
    });
    this.setState(
      {
        tags: trimTags
      },
      () => console.log(this.state.tags)
    );
  };

  createIssue = () => {
    let token = localStorage.getItem('token');
    console.log('Issue Image', this.props.issuePic);
    axios
      .post(
        'http://localhost:8081/issues',
        {
          issueTitle: this.state.title,
          issueDescription: this.state.markdown,
          tags: this.state.tags,
          issueImages: [this.props.issuePic]
        },
        { headers: { 'user-auth-token': token } }
      )
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          this.props.history.push('/dashboard');
        } else {
          alert('Issue not added :(');
        }
      });
  };
  // get = () => {
  //   axios.get("localhost:8081/issues", { currentUserId: "this is not real" }).then(response => {
  //     if (response.status === 200) {
  //       this.setState({
  //         title: "Added!",
  //         markdown: ""
  //       });
  //     }
  //   });
  // };
  render() {
    const { title, markdown, tags, search } = this.state;
    return (
      <div className="add-issue">
        <input
          className="title"
          placeholder="NEW ISSUE"
          autoFocus
          onChange={e => {
            this.setState({ title: e.target.value });
          }}
          value={title}
        />
        <div className="preview-area">
          <textarea
            name="issue"
            id=""
            cols="80"
            rows="25"
            placeholder="# Enter Markdown Here"
            autoComplete="off"
            onChange={e => {
              this.setState({ markdown: e.target.value });
            }}
            value={markdown}
          />
          <div className="markdown-preview">
            <Code markdown={markdown} />
          </div>
        </div>
        <input
          placeholder="#tag #example #javascript #java"
          className="title"
          onChange={e => this.handleTags(e.target.value)}
        />
        <p>Upload a photo to help describe your issue</p>
        <Cloudinary component="issuephoto" />
        <div className="add" onClick={this.createIssue}>
          Create New Issue
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issuePic: state.issuePic
  };
}
export default connect(mapStateToProps)(AddIssue);
