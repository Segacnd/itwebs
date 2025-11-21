import * as styles from "./homeConsult.module.css";
import HomeConsultForm from "./HomeConsultForm";

const HomeConsultBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <div className={styles.question}>
          Не знаете какой сайт
          <br />
          вам нужен?
        </div>
        <div className={styles.answer}>Запишитесь на консультацию</div>
      </div>
      <div className={styles.inputs}>
        <HomeConsultForm />
      </div>
    </div>
  );
};

export default HomeConsultBlock;
