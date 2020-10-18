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
          <div className="jumbotron-content">
            <h1 className="display-10">Hello, World!</h1>
            <br></br>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classNamees for typography and spacing to space
              content out within the larger container.
            </p>
            <div className="learnMore">
              <a
                className="btn btn-primary btn-lg"
                id="jumbotron-btn"
                href="#"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
