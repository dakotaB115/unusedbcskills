import React, { Component } from "react";

import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container" style={{ position: "relative" }}>
        <div
          id="home"
          style={{ position: "absolute", top: -71, right: "50%" }}
        />
        <div className="content">
          <div className="vision-statement">
            <div className="vs-word">
              E<span>DUCATE.</span>
            </div>
            <div className="vs-word">
              I<span>NNOVATE.</span>
            </div>
            <div className="vs-word">
              D<span>EPLOY.</span>
            </div>
          </div>
          <div className="pic-container">
            <img src={require(`../../Img/classpic.jpg`)} alt="classpic.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
