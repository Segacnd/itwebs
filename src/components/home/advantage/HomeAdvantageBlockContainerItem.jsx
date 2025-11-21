'use client'
import * as motion from "motion/react-client";
import stylesMain from "./homeAdvantages.module.css";

export default function HomeAdvantageBlockContainerItem({
  block1,
  block2,
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
        <div className={stylesMain.advantageNum}>0{block1.id}</div>
        <div className={stylesMain.advantageRightText}>
          <div className={stylesMain.advantageMainText}>{block1.main}</div>
          <div className={stylesMain.advantageSecText}>{block1.sec}</div>
        </div>
      </div>
      <div className={stylesMain.advantageItem}>
        <div className={stylesMain.advantageText}>
          <div className={stylesMain.advantageMainText}>{block2.main}</div>
          <div className={stylesMain.advantageSecText}>{block2.sec}</div>
        </div>
        <div className={stylesMain.advantageRightNum}>0{block2.id}</div>
      </div>
    </motion.div>
  );
}
