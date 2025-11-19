
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './homeTest.module.css';

const HomeTestBlock = () => {
    return (
        <div className={globalStyles.block}>
            <div className={styles.headingContainer}>
                <div className={styles.heading}>Hello there</div>
            </div>
        </div>
    )
}

export default HomeTestBlock;