"use server";

import * as globalStyles from "../../../styles/app.module.css";
import AboutBlockHeading from "../AboutBlockHeading";
import { loadStages } from "@/services/loadStages.service";
import { ABOUT_DEFAULT_STAGES } from "./about-stages-config";
import AboutStagesContainer from "./AboutStagesContainer";

const AboutStages = async () => {
  let stages = await loadStages();
  if (stages === null) stages = [...ABOUT_DEFAULT_STAGES];
  return (
    <div
      className={[globalStyles.block].join(" ")}
      style={{ marginBottom: "20svh" }}
    >
      <AboutBlockHeading
        style={{ paddingLeft: "6vw", marginBottom: "0" }}
        text="этапы работы"
      />

        <AboutStagesContainer stages={stages} />
   
    </div>
  );
};

export default AboutStages;
