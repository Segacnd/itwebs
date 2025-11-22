'use client'

import * as homeStyles from "../../home/homeWorks.module.css";
import * as globalStyles from "../../../styles/app.module.css";
import HomeWorkItem from "../../home/HomeWorkItem";
import HomeWorkScrollElem from "../../home/HomeWorkScrollElem";
import AboutBlockHeading from "../AboutBlockHeading";
import { useEffect, useState } from "react";
import { ABOUT_WORKS } from "./about-works-config";
const AboutWorks = () => {

  let [wind, setWind] = useState(null);
  useEffect(() => {
    setWind(window);
  }, []);
  return (
    <div
      id="works"
      className={[
        globalStyles.block,
        globalStyles.headerMargin,
        homeStyles.block,
      ].join(" ")}
      style={{ marginBottom: "10svh" }}
    >
      <AboutBlockHeading
        style={{
          alignSelf: "flex-end",
          marginBottom: wind && wind.innerWidth > 900 ? "10svh" : "0",
          paddingLeft: "7vw",
        }}
        text="познакомьтесь с нашим портфолио"
      />
      <div
        className={homeStyles.container}
        style={{
          marginTop: wind && wind.innerWidth <= 900 ? "5svh" : "",
          height: wind && wind.innerWidth <= 900 ? "max-content" : "",
        }}
      >
        {ABOUT_WORKS.map((item) => (
          <HomeWorkItem text={item.text} image={item.image} key={item.image} />
        ))}
      </div>
      <HomeWorkScrollElem styles={{ top: "-2vh", left: "5vw" }} />
    </div>
  );
};

export default AboutWorks;
