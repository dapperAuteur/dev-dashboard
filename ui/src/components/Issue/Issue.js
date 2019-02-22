import React from "react";
import Code from "../Code/Code";
import "./issue.scss";

const Issue = props => {
  return (
    <div className="issue">
      <h1 className="title">Redux doesn't work</h1>
      <div className="info">
        <img src="http://robohash.org/chris" alt="" className="user-image" />
        <h2 className="issue-info">chris12540 - Jan 4th, 2019</h2>
      </div>
      <Code
        markdown={
          "![](https://res.cloudinary.com/drjonifvw/image/upload/v1550696460/dev-dashboard/Example.png)\n# heading"
        }
      />
    </div>
  );
};

export default Issue;
