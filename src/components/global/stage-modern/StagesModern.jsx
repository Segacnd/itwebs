import * as styles from "../globales.module.css";
import * as globalStyles from "../../../styles/app.module.css";

import Article from "../Article";
import StageModernBlock from "./StageModernBlock";
import StageLine from "./StageLine";
import { STAGES } from "@/config/stage-modern-config";
import { Fragment } from "react";

const StagesModern = () => {
  return (
    <div className={globalStyles.block} style={{ maxHeight: "none" }}>
      <Article styles={{ position: "relative", width: "100vw" }} heading="Этапы разработки сайта" />
      <div className={styles.stagesBlock}>
        {STAGES.map((item) => (
          <Fragment key={item.id}>
            <StageModernBlock item={item} />
            {!!item.line && item.heading !== "Брифинг" && <StageLine img={item.line.desktop} imgMobile={item.line.mobile} alt={item.heading} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default StagesModern;
