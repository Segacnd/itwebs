import { ADVANTAGES } from "@/config/home-adventags-block-config";
import stylesMain from "./homeAdvantages.module.css";
import HomeAdvantageBlockContainerItem from "./HomeAdvantageBlockContainerItem";

export default function HomeAdvantageBlockContainer() {
  return (
    <div className={stylesMain.advantagesContainer}>
      <HomeAdvantageBlockContainerItem leftSide={ADVANTAGES[0]} rightSide={ADVANTAGES[1]} />
      <HomeAdvantageBlockContainerItem
        leftSide={ADVANTAGES[2]}
        rightSide={ADVANTAGES[3]}
        translate="translateX(90%)"
        translateSecond="translateX(-30%)"
      />
    </div>
  );
}
