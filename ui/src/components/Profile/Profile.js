import React from "react";
import IssueCard from "../IssueCard/IssueCard";

const Profile = props => {
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
    }
  ];
  const issueCards = issues.map(issue => {
    return <IssueCard issue={issue} path={issue.path} />;
  });
  return <div className="profile">{issueCards}</div>;
};

export default Profile;
