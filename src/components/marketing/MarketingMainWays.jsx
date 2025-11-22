import * as globalStyles from "../../styles/app.module.css";
import AboutBlockHeading from "../about/heading/AboutBlockHeading";
import { color } from "motion";
import { Item } from "@/utils/mainWaysItem.util";
import DevWays from "../global/services/DevWays";

const MarketingMainWays = () => {
  const items = [
    new Item("Демографический подход", "line-md:map-marker-alt-loop"),
    new Item("Контроль процессов", "line-md:speed-loop"),
    new Item("Интеграции с системами", "icon-park-outline:upload-computer"),
    new Item("Поддержка после запуска", "streamline:customer-support-1-solid"),
  ];
  return (
    <div className={globalStyles.block}>
      <AboutBlockHeading text={"Наш подход"} style={{ color: "white", paddingLeft: "7vw" }} />
      <DevWays items={items} />
    </div>
  );
};

export default MarketingMainWays;
