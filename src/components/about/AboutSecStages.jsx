"use server";
import * as globalStyles from "../../styles/app.module.css";
import AboutBlockHeading from "./AboutBlockHeading";
import * as styles from "./about.module.css";
import { loadStages } from "../../services/loadStages.service";
import AboutStageItem from "./stages/AboutStageItem";
import { text } from "motion/react-client";
import * as motion from "motion/react-client";
import StagesContainer from "./StagesContainer.jsx";
import { ABOUT_DEFAULT_STAGES } from "./stages/about-stages-config";

const AboutSecStages = async () => {

  let stages = await loadStages();
  if (!stages) {
    stages = [...ABOUT_DEFAULT_STAGES];
  }
  return (
    <div className={globalStyles.block}>
      <AboutBlockHeading
        text={"Этапы работы"}
        style={{ alignSelf: "flex-start", paddingLeft: "5vw" }}
      />
      <StagesContainer stages={stages} />
      {/* <div
            className={styles.aboutSecStagesContainer}>
                <div className={[styles.aboutSecStagesLine]}>
                    {stages.slice(0,4).map((item, ind) => (
                        <AboutStageItem key={ind + 1} name={item.name} text={item.text} num={item.id} />
                    ))}
                </div>
                <div className={[styles.aboutSecStagesLine]}>
                    {stages.slice(4,8).map((item, ind) => (
                        <AboutStageItem key={ind + 1} name={item.name} text={item.text} num={item.id} />
                    ))}
                </div>
            </div> */}
    </div>
  );
};

export default AboutSecStages;
