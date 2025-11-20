import * as styles from "../globales.module.css";
import StageLine from "./StageLine";
export default function StageModernBlock({ item }) {
  const { id, heading, text, side, style, line } = item;
  const isLeftSide = side === "left";
  return (
    <div className={styles.stagesItem} style={{ marginTop: "0", justifyContent: isLeftSide ? "flex-start" : "flex-end", ...style }}>
      <div className={styles.stageItemContent}>
        {isLeftSide ? <div className={styles.stagesNum}>{id}</div> : ""}
        <div className={styles.stageItemTextContent} style={{ marginRight: isLeftSide ? "0" : "1vw" }}>
          <div className={styles.stageItemHead} style={{ textAlign: isLeftSide ? "start" : "end" }}>
            {heading}
          </div>
          <div className={styles.stageItemText} style={{ textAlign: isLeftSide ? "start" : "end" }}>
            {text}
          </div>
        </div>
        {isLeftSide ? "" : <div className={styles.stagesNum}>{id}</div>}
      </div>
      {heading === "Брифинг" && <StageLine img={line.desktop} imgMobile={line.mobile} alt={heading} />}
    </div>
  );
}
