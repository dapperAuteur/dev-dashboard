import React from "react";
import { Link } from "react-router-dom";
import "./IssueCard.scss";

const IssueCard = props => {
  const { title, date, user, path } = props.issue;
  return (
    <div className="issue-card">
      <Link to={path}>
        <h1 className="title">{title}</h1>
      </Link>
      <p className="date">{date}</p>
      <img src={user.image ? user.image : "http://robohash.org/placeholder"} alt="" className="issue-user-img" />
      {/* <div className="code">{}</div> */}
    </div>
  );
};

export default IssueCard;
