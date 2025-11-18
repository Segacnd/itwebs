
import * as styles from './detail.module.css';

const DetailPoint = ({text}) => {
    return(
        <div className={styles.detailPointContainer}>
            <span className={styles.detailPointCircle}></span>
            <h3 className={styles.detailPointText}>{text}</h3>
        </div>
    )
}

export default DetailPoint;