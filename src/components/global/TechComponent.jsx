import * as styles from "../home/homeTech.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileTech from "./MobileTech";
import { TECH_STACK } from "@/config/tech-stack-config";

const TechComponents = () => {
  return (
    <>
      {/* width < 900px */}
      <div className={styles.mobileOnly}>
        <MobileTech />
      </div>
       {/* width > 900px */}
      <div  className={styles.desktopOnly}>
        <div className={styles.carousel}>
          {TECH_STACK.slice(0, 11).map((item, ind, arr) => (
            <div
              key={item}
              className={styles.carouselItem}
              style={{
                animationDelay: `calc(45s / ${arr.length} * (${arr.length} - ${ind + 1}) * -1)`,
              }}
            >
              <Icon
                icon={item}
                className={styles.carouselItemIcon}
                style={{ color: "black" }}
              />
            </div>
          ))}
        </div>
        <div className={styles.carousel} style={{ marginTop: "9vw" }}>
          {TECH_STACK.slice(11).map((item, ind, arr) => (
            <div
              key={item}
              className={styles.carouselItem}
              style={{
                animationDelay: `calc(45s / ${arr.length} * (${arr.length} - ${ind + 1}) * -1)`,
                animationDuration: "45s",
                animationDirection: "reverse",
              }}
            >
              <Icon
                icon={item}
                className={styles.carouselItemIcon}
                style={{ color: "black" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechComponents;
