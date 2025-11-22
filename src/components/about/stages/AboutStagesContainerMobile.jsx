import HomeWorkScrollElem from "@/components/home/HomeWorkScrollElem";
import AboutStagesContainerItem from "./AboutStagesContainerItem";
import styles from "./about-stage.module.css";

// TODO: тут можно сделать слайдер
export default function AboutStagesContainerMobile({ stages, ref }) {
  return (
    <div className={styles.aboutSecStagesContainer}>
      <div ref={ref} className={[styles.aboutSecStagesLine]}>
        <div style={{ width: "0vw" }}></div>
        {stages && stages.map((item) => <AboutStagesContainerItem key={item.id} num={item.id} name={item.name} text={item.text} />)}
        <div style={{ width: "0vw", height: "50vw" }}></div>
      </div>
      <HomeWorkScrollElem styles={{ top: "-2vh", left: "-28vw" }} />
    </div>
  );
}
