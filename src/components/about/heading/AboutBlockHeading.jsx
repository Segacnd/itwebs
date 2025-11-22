"use client";
import * as motion from "motion/react-client";
import * as styles from "./about-heading.module.css";

const AboutBlockHeading = ({ style, text, size, weight, transform }) => {
  return (
    <div className={styles.blockHeading} style={{ ...style }}>
      <motion.div
        className={styles.blockHeadingMotion}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{
          y: -100,
          opacity: 1,
          "@media (max-width: 900px)": {
            y: 0,
          },
        }}
        viewport={{ amount: 1, once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          style={{
            fontSize: size,
            fontWeight: weight,
            textTransform: transform,
          }}
        >
          {text}
        </h2>
      </motion.div>
    </div>
  );
};

export default AboutBlockHeading;
