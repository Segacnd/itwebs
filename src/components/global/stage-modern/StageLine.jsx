import Image from "next/image";
import * as styles from "../globales.module.css";

export default function StageLine({ img, imgMobile, alt }) {
  return (
    <div className={styles.stageLineContainer} style={{ alignSelf: alt === "Брифинг" ? "center" : "", marginBottom: "0" }}>
      <Image src={img} className={styles.stageLine} alt={alt} />
      <Image src={imgMobile} className={styles.stageLineMobile} alt={alt} />
    </div>
  );
}
