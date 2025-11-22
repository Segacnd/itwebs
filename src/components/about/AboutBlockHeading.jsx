import * as motion from "motion/react-client";
import * as styles from "./about.module.css";

const AboutBlockHeading = ({ style, text, size, weight, transform }) => {
    // TODO: проверить как работают motion media query
  return (
    <div className={styles.blockHeading} style={{ ...style }}>
      <motion.div
        className={styles.blockHeadingMotion}
        transition={{ duration: 1, ease: "easeOut" }}
        initial={{ transform: "translateY(0)" }}
        whileInView={{
          "@media (max-width: 900px)": { transform: "translateY(0svh)" },
          "@media (min-width: 901px)": { transform: "translateY(-10svh)" },
        }}
        viewport={{ amount: 0.4 }}
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
