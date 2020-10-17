import React, { Component } from 'react'
import logo from "../../test-jumbo.jpg";

export default class Showcase extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around">
                <div className="showcase-item">
                    <h1 className="showcase-obj">Showcase Item</h1>
                    <img className="showcase-img" src={logo}></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ut nihil vero ipsum? Dolores quasi vitae natus ad adipisci
                          odit dolorem!</p>
                </div>
                <div className="showcase-item">
                    <h1 className="showcase-obj">Showcase Item</h1>
                    <img className="showcase-img" src={logo}></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ut nihil vero ipsum? Dolores quasi vitae natus ad adipisci
                          odit dolorem!</p>
                </div>
                <div className="showcase-item">
                    <h1 className="showcase-obj">Showcase Item</h1>
                    <img className="showcase-img" src={logo}></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ut nihil vero ipsum? Dolores quasi vitae natus ad adipisci
                          odit dolorem!</p>
                </div>
            </div>
        )
    }
}
