'use client'
import * as motion from "motion/react-client";
import * as styles from "./stages.module.css";
import HomeStageItem from "./HomeStageItem";

export default function HomeStageContainer() {
  return (
    <motion.div
      transition={{ duration: 1, ease: "easeOut" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.4 }}
      className={styles.stagesContainer}
      style={{ animation: "none" }}
    >
      <div className={styles.stagesContainerFirstLine}>
        {stages
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
      <div className={styles.stagesContainerSecondLine}>
        {stages
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
