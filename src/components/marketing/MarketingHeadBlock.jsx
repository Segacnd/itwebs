
import * as styles from './marketingHead.module.css';
import * as globalStyles from '../../styles/app.module.css';
import PageHeading from '../global/PageHeading';
import * as motion from 'motion/react-client';

const MarketingHeadBlock = async () => {
    return(
        <div className={[globalStyles.block,styles.block].join(' ')} style={{ paddingTop: 0,height: 'fit-content' }}>
            <PageHeading title={'Маркетинг'} style={{ paddingLeft: '7vw' }} />
            <div className={styles.headText}>
                <div className={styles.headTitleMotionContainer}>
                    <motion.div
                        className={styles.headTitleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-7svh)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0svh)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <h1 className={styles.headTitle}>Маркетинг, который превращает клиентов в постоянных покупателей</h1>
                    </motion.div>
                </div>
                <div className={styles.headSubMotionContainer}>
                    <motion.div
                        className={styles.headSubMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(15svh)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0svh)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                        >
                        <h3 className={styles.headSubtitle}>Разрабатываем стратегии продвижения, которые увеличивают поток клиентов, усиливают позиции компании на рынке и обеспечивают стабильный рост прибыли.</h3>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default MarketingHeadBlock;