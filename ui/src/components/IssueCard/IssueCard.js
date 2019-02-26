import React from "react";
import "./IssueCard.scss";

const IssueCard = props => {
  const { issueTitle, issueDescription, createdAt, issueImages, tags } = props.issue;
  return (
    <div className="issue-card">
      <h1 className="title">{issueTitle}</h1>
      <p>{issueDescription}</p>
      <p>
        Created: {createdAt.substring(0, 10)}, @ {createdAt.substring(11, 16)}
      </p>
      {issueImages.length > 0 && <img src={issueImages[0]} />}
      {tags.length > 0 && tags.map(tag => "#" + tag.tagName + " ")}
    </div>
  );
};

export default IssueCard;
