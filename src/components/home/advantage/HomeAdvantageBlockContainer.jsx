import { ADVANTAGES } from "@/config/home-adventags-block-config";
import stylesMain from "./homeAdvantages.module.css";
import HomeAdvantageBlockContainerItem from "./HomeAdvantageBlockContainerItem";

export default function HomeAdvantageBlockContainer() {
  return (
    <div className={stylesMain.advantagesContainer}>
      <HomeAdvantageBlockContainerItem block1={ADVANTAGES[0]} block2={ADVANTAGES[1]} />
      <HomeAdvantageBlockContainerItem
        block1={ADVANTAGES[2]}
        block2={ADVANTAGES[3]}
        translate="translateX(90%)"
        translateSecond="translateX(-30%)"
      />
    </div>
  );
}
