"use server";
import * as styles from "./about-partners.module.css";
import * as globalStyles from "../../../styles/app.module.css";
import AboutBlockHeading from "../heading/AboutBlockHeading";
import { loadPartners } from "../../../services/loadPartners.service";
import Image from "next/image";
import "../../../../envConfig.js";
import { DEFAULT_PARTNERS } from "./about-partners-config";

const AboutPartners = async () => {
  let partners = await loadPartners();

  if (!partners || !partners.length) {
    partners = [...DEFAULT_PARTNERS];
  }
  return (
    <div className={globalStyles.block}>
      <AboutBlockHeading text={"Наши партнеры"} style={{ alignSelf: "flex-end", paddingRight: "6vw" }} />
      <div className={styles.aboutPartnersContainer}>
        {partners.map((item, ind) => (
          <div className={styles.aboutPartnerItem} key={ind + 1}>
            <Image
              title={item.name}
              fill={true}
              src={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/partners/${item.image}`}
              className={styles.aboutPartnersImage}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPartners;
