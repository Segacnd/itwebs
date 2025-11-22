import * as styles from './stages.module.css';

const HomeStageItem = (props) => {
    return (
        <div className={styles.stageItem}>
            <div className={styles.stageItemNum}>
            {'0'+props.num}
            </div>
            <div className={styles.stageItemText}>
                <div className={styles.stageItemName}>
                    {props.name}
                </div>
                <div className={styles.stageItemDesc}>
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

export default HomeStageItem