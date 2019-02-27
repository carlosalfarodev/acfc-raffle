import React from "react";
import "./Winner.css";

export default class Winner extends React.Component {
  render() {
    return <div className="winner">{this.props.winner}</div>;
  }
}
