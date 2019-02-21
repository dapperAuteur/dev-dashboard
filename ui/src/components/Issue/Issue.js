import React, { Component } from "react";

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: ""
    };
  }
  render() {
    const { title, date } = this.state;
    const { user } = this.props;
    return (
      <div className="issue">
        <h1 className="title">{title}</h1>
        <p className="date">{date}</p>
        <img src={user.image ? user.image : "http://http.cat/400"} alt="" className="issue-user-img" />
      </div>
    );
  }
}

export default Issue;
