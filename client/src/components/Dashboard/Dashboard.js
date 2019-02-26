import React from "react";
import IssueCard from "../IssueCard/IssueCard";

const Dashboard = props => {
  const issues = [
    {
      title: `Redux doesn't work`,
      date: `Jan 6th, 2019`,
      user: {
        image: "http://robohash.org/chris"
      },
      path: "/redux",
      code: "const something = 42;\n\nfunction doSomething(num){\n\treturn num*69;\n}"
    },
    {
      title: `MondgoDB doesn't start`,
      date: `Jan 4th, 2019`,
      user: {
        image: "http://robohash.org/jane"
      },
      path: "/mongodb"
    },
    {
      title: `Dude how do I use this thing`,
      date: `Jan 1th, 2019`,
      user: {
        image: "http://robohash.org/who"
      },
      path: "/huh"
    }
  ];
  const issueCards = issues.map(issue => {
    return <IssueCard issue={issue} path={issue.path} />;
  });
  return <div className="dashboard">{issueCards}</div>;
};

export default Dashboard;
