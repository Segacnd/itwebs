
import * as styles from './promotionHead.module.css';
import * as globalStyles from '../../styles/app.module.css';
import PageHeading from '../global/PageHeading';
import * as motion from 'motion/react-client';

const PromotionHeadBlock = async () => {
    return(
        <div className={[globalStyles.block,styles.block].join(' ')} style={{ paddingTop: 0,height: 'fit-content' }}>
            <PageHeading title={'Продвижение'} style={{ paddingLeft: '7vw' }} />
            <div className={styles.headText}>
                <div className={styles.headTitleMotionContainer}>
                    <motion.div
                        className={styles.headTitleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-7svh)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0svh)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <h1 className={styles.headTitle}>Доработки, продвижение и настройка веб-приложений</h1>
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
                        <h3 className={styles.headSubtitle}>Мы улучшим ваш сайт так, чтобы он стал лидером в сети. Учтем ваши пожелания и доработаем функционал.</h3>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default PromotionHeadBlock;