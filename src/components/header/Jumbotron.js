import React, { Component } from "react";
import logo from "../../test-jumbo.jpg";
export default class Jumbotron extends Component {
  render() {
    return (
      <div className="header">
        <div className="carousel">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={logo} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img src={logo} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img src={logo} alt="Third slide" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{margin:0,padding:0,paddingTop:'8em'}}>
          <div class="col-sm">
            <div class="jumbotron">
              <div className="title">
                <h1 class="display-10">Hello, World!</h1>
                <br></br>
                <p class="lead">
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr class="my-4" />
                <p>
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p>
                <div className="learnMore">
                  <a
                    class="btn btn-primary btn-lg"
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
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}
