'use client'

import { ADVANTAGES } from "@/config/home-adventags-block-config";
import stylesMain from "./homeAdvantages.module.css";
import * as motion from "motion/react-client";

export default function HomeAdvantageBlockContainerMobile() {
  return (
          <div className={stylesMain.advantagesContainerMobile}>
        {ADVANTAGES.map((item, ind) => (
          <motion.div
            initial={{
              transform:
                (ind + 1) % 2 == 0 ? "translateX(-90%)" : "translateX(90%)",
            }}
            viewport={{ amount: "some" }}
            whileInView={{
              transform:
                (ind + 1) % 2 == 0 ? "translateX(-10%)" : "translateX(10%)",
            }}
            transition={{ duration: 1 }}
            key={ind + 1}
            style={{
              overflow: "hidden",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              height: "30svh",
            }}
          >
            <div
              className={
                (ind + 1) % 2 != 1
                  ? stylesMain.leftAdvantage
                  : stylesMain.rightAdvantage
              }
            >
              <div className={stylesMain.advantageNum}>{"0" + (ind + 1)}</div>
              <div className={stylesMain.advantageText}>
                <div className={stylesMain.advantageMainText}>{item.main}</div>
                <div className={stylesMain.advantageSecText}>{item.sec}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
  )
}
