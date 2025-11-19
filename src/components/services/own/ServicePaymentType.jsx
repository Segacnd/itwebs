
import * as styles from './detailButtons.module.css';
import * as byzTypeStyles from './byztypes.module.css';

const ServicePaymentType = ({ num, name, stages, desc, advantage }) => {
    return (
        <div key={name+num} className={styles.paymentItemContainer}>
            <div className={styles.paymentItemNum}>
                {num < 10 && '0'}
                {num}
            </div>
            <div className={styles.paymentItemContent}>
                <h3 className={styles.paymentItemName}>{name}</h3>
                <h4 className={styles.paymentItemDesc}>{desc}</h4>
                <div className={styles.paymentItemStages}>
                    {stages.map(item => (
                        <div key={item} className={styles.paymentItemStage}>
                            <div>
                                <div className={byzTypeStyles.columnCircle}>
                                </div>
                            </div>
                            <h4 className={styles.paymentItemStageText}>{item}</h4>
                        </div>
                    ))}
                </div>
                <div className={styles.paymentAdvantage}>
                    {advantage}
                </div>
            </div>
        </div>
    )
}

export default ServicePaymentType;