import React, { Component } from "react";
import Code from "../Code/Code";
import "./addIssue.scss";
import axios from "axios";

class AddIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      markdown: "",
      tags: [],
      search: ""
    };
  }

  add = () => {
    axios
      .post("http://localhost:8081/issues", {
        newIssue: {
          currentUserId: "this is not real",
          issueDescription: this.state.markdown
        }
      })
      .then(response => {
        if (response.status === 200) {
          this.setState(
            {
              title: "Added!",
              markdown: response.data.issueDescription
            },
            console.log(response)
          );
        }
      });
  };
  get = () => {
    axios.get("localhost:8081/issues", { currentUserId: "this is not real" }).then(response => {
      if (response.status === 200) {
        this.setState({
          title: "Added!",
          markdown: ""
        });
      }
    });
  };

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
        <div className="add" onClick={this.add}>
          Add
        </div>
        <div className="preview-area">
          <textarea
            name="issue"
            id=""
            cols="80"
            rows="25"
            placeholder="# Enter Markdown Here"
            autocomplete="off"
            onChange={e => {
              this.setState({ markdown: e.target.value });
            }}
            value={markdown}
          />
          <div className="markdown-preview">
            <Code markdown={markdown} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddIssue;
