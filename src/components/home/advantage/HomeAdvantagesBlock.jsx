import stylesMain from "./homeAdvantages.module.css";
import HomeAdvantageBlockContainerMobile from "./HomeAdvantageBlockContainerMobile";
import HomeAdvantageBlockContainer from "./HomeAdvantageBlockContainer";

const HomeAdvantagesBlock = () => {
  return (
    <div className={stylesMain.block}>
      <div className={stylesMain.articleContainer}>
        <div className={stylesMain.article}>Почему выбирают нас</div>
      </div>
      <HomeAdvantageBlockContainerMobile />
      <HomeAdvantageBlockContainer />
    </div>
  );
};

export default HomeAdvantagesBlock;
