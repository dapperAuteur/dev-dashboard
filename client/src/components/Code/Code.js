import React from "react";
import marked from "marked";
import "./code.scss";

class Code extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.rawMarkup = this.rawMarkup.bind(this);
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.markdown, { sanitize: true });
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="code">
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default Code;
