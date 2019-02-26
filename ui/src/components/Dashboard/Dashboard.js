import React, { Component } from "react";
import IssueCard from "../IssueCard/IssueCard";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      allIssues: null
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8081/issues").then(res => {
      console.log(res.data);
      this.setState({
        allIssues: res.data
      });
    });
  }

  render() {
    const issueCards =
      this.state.allIssues !== null &&
      this.state.allIssues.map(issue => {
        return <IssueCard issue={issue} key={issue._id} />;
      });

    return <div className="dashboard">{issueCards}</div>;
  }
}

export default Dashboard;
