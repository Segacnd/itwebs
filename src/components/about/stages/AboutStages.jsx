"use server";
import * as globalStyles from "../../../styles/app.module.css";
import AboutBlockHeading from "../heading/AboutBlockHeading";
import { loadStages } from "../../../services/loadStages.service";
import AboutStagesContainer from "./AboutStagesContainer.jsx";
import { ABOUT_DEFAULT_STAGES } from "./about-stages-config";
// import AboutStagesContainerMobile from "./AboutStagesContainerMobile";

const AboutStages = async () => {
  let stages = await loadStages();
  if (!stages) {
    stages = ABOUT_DEFAULT_STAGES;
  }
  return (
    <div className={globalStyles.block}>
      <AboutBlockHeading text={"Этапы работы"} style={{ alignSelf: "flex-start", paddingLeft: "5vw" }} />
      {/* mobile */}
      {/* <AboutStagesContainerMobile stages={stages} /> */}
      {/* dekstop */}
      <AboutStagesContainer stages={stages} />
    </div>
  );
};

export default AboutStages;
