'use server'
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './headBlock.module.css';
import * as motion from 'motion/react-client';
import PageHeading from '../global/PageHeading';

const PerfomanceHeadBlock = () => {
    return(
        <div className={[globalStyles.block,styles.block].join(' ')} style={{ paddingTop: 0,height: 'fit-content' }}>
            <PageHeading title={'Perfomance-маркетинг'} style={{ paddingLeft: '7vw', color: 'white' }} />
            <div className={styles.headText}>
                <div className={styles.headTitleMotionContainer}>
                    <motion.div
                        className={styles.headTitleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-99%', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <h1 className={styles.headTitle}>Продажи и клиенты через точный Performance-маркетинг</h1>
                    </motion.div>
                </div>
                <div className={styles.headSubMotionContainer}>
                    <motion.div
                        className={styles.headSubMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(99%)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                        >
                        <h2 className={styles.headSubtitle}>Настраиваем кампании, где каждый рубль бюджета работает на результат: рост продаж, привлечение клиентов и максимизацию окупаемости рекламы.</h2>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default PerfomanceHeadBlock;