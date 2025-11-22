"use server";
import Article from "../../global/Article";
import * as styles from "./stages.module.css";
import { loadStages } from "../../../services/loadStages.service";
import { defaultStages } from "./home-stage-config";
import HomeStageContainer from "./HomeStageContainer";

const HomeStages = async () => {
  let stages = await loadStages();
  if (stages === null) stages = [...defaultStages];

  return (
    <>
      <div className={styles.block}>
        <Article
          style={{ paddingTop: "1vw" }}
          heading="полный цикл разработки сайтов"
        />
        <HomeStageContainer stages={stages} />
      </div>
    </>
  );
};

export default HomeStages;
