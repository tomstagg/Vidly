import React, { Component } from "react";

class Like extends Component {
  render() {
    let heartClass = "fa fa-heart";

    if (!this.props.liked) heartClass += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={heartClass}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
