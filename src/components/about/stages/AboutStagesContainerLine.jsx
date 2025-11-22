import AboutStagesContainerItem from "./AboutStagesContainerItem";
import * as styles from "./about-stage.module.css";

export default function AboutStagesContainerLine({ stages }) {
  return (
    <div className={styles.aboutSecStagesLine}>
      {stages && stages.map((item) => <AboutStagesContainerItem key={item.id} name={item.name} text={item.text} num={item.id} />)}
    </div>
  );
}
