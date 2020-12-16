import React from "react";
import data from "../Data";
import Image from "../images/oppslag.jpg";

export default () => {
  return (
    <div className="HomeForm">
      <h1>{data.home.title}</h1>
      <h2>{data.home.subTitle}</h2>
      <h3>{data.home.date}</h3>

      <img alt="oppslag" src={Image} />

      <p className="txt">{data.home.text1}</p>
      <p className="txt">{data.home.text2}</p>
      <p className="txt">{data.home.text3}</p>
      <p className="txt">{data.home.text4}</p>

      <p className="bold">{data.home.subText1}</p>

      <p className="bold">
        {data.home.subText2}:{" "}
        <a href={`mailto:${data.home.mail}`}>{data.home.mail}</a>
      </p>
    </div>
  );
};
