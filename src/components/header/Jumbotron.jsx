import React, { Component } from "react";
import logo from "../../test-jumbo.jpg";
export default class Jumbotron extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="carousel">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={logo} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img src={logo} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img src={logo} alt="Third slide" />
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron">
          <h1>Ryan Keys</h1>
          <h3>Full Stack Engineer</h3>
        </div>
      </div>
    );
  }
}
