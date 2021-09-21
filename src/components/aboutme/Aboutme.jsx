import "./aboutme.scss";

import React from "react";

export default function aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="pagelayout">
        <div className="Pictureholder">
          <img src="assets/facepic.jpg" alt="" />
        </div>
      </div>

      <div className="text">
        <div className="wrapper">
          <h1>
            Technology has always played a significant role in my life. Being
            able to click my problems away, or asking an A.I to turn on my
            lights has always fascinated me. I strive to create an application
            that would be able to facilitate everyday mundane tasks to relieve
            some of the stress of our busy day to day lives. There have been
            times when something as simple as not having to get out of bed to
            turn off my lights has aided in relieving stress that accumulates
            throughout my work week.
          </h1>
        </div>
      </div>
    </div>
  );
}
