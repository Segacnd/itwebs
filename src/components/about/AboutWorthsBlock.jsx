"use server";
import * as styles from "./about.module.css";
import * as globalStyles from "../../styles/app.module.css";
import AboutWorthItem from "./AboutWorthItem";
import AboutBlockHeading from "./heading/AboutBlockHeading";
import { loadWorths } from "@/services/loadWorths.service";
import { DEFAULT_WORTH } from "./worth/about-worth-config";


const AboutWorthsBlock = async () => {
  let worths = await loadWorths();
  if (worths === null) worths = DEFAULT_WORTH
  return (
    <div className={[globalStyles.block, globalStyles.headerMargin, styles.mobilePaddingLeft].join(" ")} style={{ marginTop: "10svh" }}>
      <AboutBlockHeading text="Ценности/подход" />
      <div style={{ width: "88vw", display: "flex", flexDirection: "column", height: "fit-content", alignItems: "center" }}>
        <div className={styles.worthsContainer}>
          {worths.slice(0, 4).map((item, ind) => (
            <AboutWorthItem key={ind + 1} id={ind} name={item.name} icon={item.icon} description={item.description} delay={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutWorthsBlock;
