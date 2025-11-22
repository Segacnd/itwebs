'use client'
import * as styles from "./about-stage.module.css";

import * as motion from "motion/react-client";
import AboutStagesContainerLine from "./AboutStagesContainerLine";

const AboutStagesContainer = ({ stages }) => {
  return (
    <>
      <motion.div
        transition={{ duration: 1, ease: "easeOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4 }}
        className={styles.aboutSecStagesContainer}
        style={{ animation: "none" }}
      >
        <AboutStagesContainerLine stages={stages.slice(0, 4)} />
        <AboutStagesContainerLine stages={stages.slice(4)} />
      </motion.div>
    </>
  );
};

export default AboutStagesContainer;
