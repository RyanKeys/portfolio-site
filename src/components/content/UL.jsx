import React, { Component } from "react";

export default class UL extends Component {
  render() {
    return (
      <div className="UL-container d-flex justify-content-around">
        <h1>UL Title</h1>
        <ul className="skills-UL">
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
    );
  }
}
