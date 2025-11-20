import { Icon } from "@iconify/react/dist/iconify.js";
import * as styles from "./globales.module.css";
import { TECH_STACK } from "@/config/tech-stack-config";

function sliceTechStack(arr) {
  const lines = [];
  const slidesLength = [8, 6, 9];
  let count = 0;
  for (let i = 0; i < arr.length; ) {
    let curArr;
    if (arr.length - i < slidesLength[count]) curArr = arr.slice(i);
    else curArr = arr.slice(i, i + slidesLength[count]);
    lines.push(curArr);
    i += slidesLength[count];
    count++;
  }
  return lines
}
const MobileTech = () => {
  const lines = sliceTechStack(TECH_STACK);
  return (
    <div className={styles.mobileTechComponent}>
      {lines.map((item) => (
        <div key={item.join("-")} className={styles.mobileTechLine}>
          {item.map((el) => (
            <div key={el} className={styles.mobileTechItem}>
              <Icon icon={el} className={styles.mobileTechIcon} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileTech;
