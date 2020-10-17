import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <footer class="footer">
          <div class="d-flex justify-content-around">
            <form class="form-inline">
              <input
                class="form-control form-control-sm mr-3 w-100"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-sm btn-primary footer-btn" type="button">
                Search
              </button>
            </form>
            <div class="footer-copyright text-center col-md">
              © 2020 Copyright:
              <a href="/"> Ryan Keys</a>
            </div>
            <form class="form-inline">
              <input
                type="text"
                class="form-control form-control-sm mr-3 w-100"
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
                <button class="btn btn-sm btn-primary footer-btn" type="button">
                  Sign up
                </button>
            </form>
          </div>
        </footer>
      </div>
    );
  }
}
