"use client";
import * as homeStyles from "../../home/stages/stages.module.css";
import * as motion from "motion/react-client";
import HomeStageItem from "../../home/stages/HomeStageItem";

export default function AboutStagesContainer({stages}) {
  return (
    <motion.div
      transition={{ duration: 1, ease: "easeOut" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.4 }}
      className={homeStyles.stagesContainer}
      style={{ animation: "none" }}
    >
      <div className={homeStyles.stagesContainerFirstLine}>
        {stages
          .slice(0, 8)
          .filter((item) => item.id % 2 == 1)
          .map((item) => (
            <HomeStageItem
              key={item.id}
              num={item.id}
              name={item.name}
              desc={item.text}
            />
          ))}
      </div>
      <div className={homeStyles.stagesContainerSecondLine}>
        {stages
          .slice(0, 8)
          .filter((item) => item.id % 2 == 0)
          .map((item) => (
            <HomeStageItem
              key={item.id}
              num={item.id}
              name={item.name}
              desc={item.text}
            />
          ))}
      </div>
    </motion.div>
  );
}
