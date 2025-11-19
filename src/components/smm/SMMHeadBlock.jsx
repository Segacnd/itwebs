'use server'
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './headBlock.module.css';
import * as motion from 'motion/react-client';
import PageHeading from '../global/PageHeading';
import DetailButtonsPair from '../services/own/detailButtonsPair';

const SMMHeadBlock = () => {
    return (
        <div className={[globalStyles.block, styles.block].join(' ')} style={{ paddingTop: 0, height: 'fit-content' }}>
            <PageHeading title={'Social Media Marketing'} style={{ paddingLeft: '7vw', color: 'white' }} />
            <div className={styles.headText}>
                <div className={styles.headTitleMotionContainer}>
                    <motion.div
                        className={styles.headTitleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-99%', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <h1 className={styles.headTitle}>Эффективное продвижение бизнеса в социальных сетях</h1>
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
                        <h2 className={styles.headSubtitle}>Продвигаем бренды в соцсетях с помощью контента и таргетированной рекламы, формируя лояльное сообщество, увеличивая охваты и превращая подписчиков в покупателей.</h2>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SMMHeadBlock;