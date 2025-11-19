'use server'
import * as globalStyles from '../../../styles/app.module.css';
import * as styles from './headBlock.module.css';
import * as motion from 'motion/react-client';
import PageHeading from '../../global/PageHeading';

const ServicesHeadBlock = async () => {
    return (
        <div className={[globalStyles.block,styles.block].join(' ')} style={{ paddingTop: 0,height: 'fit-content' }}>
            <PageHeading title={'Услуги'} style={{ paddingLeft: '7vw' }} />
            <div className={styles.headText}>
                <div className={styles.headTitleMotionContainer}>
                    <motion.div
                        className={styles.headTitleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-7svh)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0svh)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <h2 className={styles.headTitle}>Разработка веб-приложений "под ключ"</h2>
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
                        <h3 className={styles.headSubtitle}>В ITs мы не продаём шаблонные решения.
                            Каждая услуга — это кастомная разработка под ваш бизнес.
                            Мы создаём сайты, которые работают, привлекают и конвертируют</h3>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default ServicesHeadBlock;