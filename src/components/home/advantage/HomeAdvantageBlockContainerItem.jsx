'use client'
import * as motion from "motion/react-client";
import stylesMain from "./homeAdvantages.module.css";

export default function HomeAdvantageBlockContainerItem({
  leftSide,
  rightSide,
  translate = "translateX(-90%)",
  translateSecond = "translateX(30%)",
}) {
  return (
    <motion.div
      initial={{ transform: translate }}
      whileInView={{
        transform: ["translateX(-90%)", translateSecond, "translateX(0)"],
      }}
      viewport={{ amount: "some" }}
      transition={{ duration: 1.5 }}
      className={stylesMain.leftAdvantages}
    >
      <div className={stylesMain.advantageItem}>
        <div className={stylesMain.advantageNum}>0{leftSide.id}</div>
        <div className={stylesMain.advantageRightText}>
          <div className={stylesMain.advantageMainText}>{leftSide.main}</div>
          <div className={stylesMain.advantageSecText}>{leftSide.sec}</div>
        </div>
      </div>
      <div className={stylesMain.advantageItem}>
        <div className={stylesMain.advantageText}>
          <div className={stylesMain.advantageMainText}>{rightSide.main}</div>
          <div className={stylesMain.advantageSecText}>{rightSide.sec}</div>
        </div>
        <div className={stylesMain.advantageRightNum}>0{rightSide.id}</div>
      </div>
    </motion.div>
  );
}
