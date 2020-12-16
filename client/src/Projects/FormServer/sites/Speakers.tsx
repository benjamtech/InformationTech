import React from "react";
import data from "../Data";

import Speaker1 from "../images/speaker1.jpg";
import Speaker2 from "../images/speaker2.jpg";
import Speaker3 from "../images/speaker3.jpg";
import Speaker4 from "../images/speaker4.jpg";

export default () => {
  return (
    <div className="SpeakerForm">
      <div className="section">
        <div className="row">
          <img src={Speaker1} alt="klovn" />

          <div className="column" style={{ marginLeft: "40px" }}>
            <h1>{data.speakers.title}</h1>
            <p>{data.speakers.text}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <p>{data.speakers.bigText}</p>

        <div className="row">
          <img src={Speaker2} alt="klovn1" />
          <img src={Speaker3} alt="klovn2" />
          <img src={Speaker4} alt="klovn3" />
        </div>
      </div>
    </div>
  );
};
