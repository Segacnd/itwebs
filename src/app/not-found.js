import Link from "next/link";
import * as styles from "../styles/404.module.css";
import * as globalStyles from "./(pages)/global.module.css";
import NotFoundButton from "@/components/buttons/not-found/NotFoundButton";

const Custom404 = () => {
  return (
    <div className={globalStyles.page}>
      <div className={styles.component}>
        <div className={styles.infoContainer}>
          <h2>Похоже вы перешли не туда</h2>
          <h2>Вернитесь на главную</h2>
          <div className={styles.buttonContainer}>
            <NotFoundButton />
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <button type="button" className={styles.buttonLink}>Вернуться домой →</button>
            </Link>
          </div>
        </div>
        <div className={styles.errorContainer}>
          <h1>404</h1>
          <h2>Упс... потерялись</h2>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
