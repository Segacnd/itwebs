'use server'
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './headBlock.module.css';
import * as motion from 'motion/react-client';
import PageHeading from '../global/PageHeading';

const DevelopmentHeadBlock = async () => {
    return (
        <div className={[globalStyles.block,styles.block].join(' ')} style={{ paddingTop: 0,height: 'fit-content' }}>
            <PageHeading title={'Разработка'} style={{ paddingLeft: '7vw', color: 'white' }} />
            <div className={styles.headText}>
                <div className={styles.headTitleMotionContainer}>
                    <motion.div
                        className={styles.headTitleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-99%', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <h1 className={styles.headTitle}>Разработка сайтов, которые работают на результат</h1>
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
                        <h2 className={styles.headSubtitle}>Создаём современные веб-приложения и сайты с продуманным дизайном и функционалом, которые повышают доверие к бренду, привлекают клиентов и превращают трафик в продажи.</h2>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default DevelopmentHeadBlock;