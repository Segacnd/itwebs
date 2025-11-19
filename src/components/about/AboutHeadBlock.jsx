import * as styles from './about.module.css';
import * as globalStyles from '../../styles/app.module.css';
import PageHeading from '../global/PageHeading';
import * as motion from 'motion/react-client';

const AboutHeadBlock = () => {
    return (
        <div className={[globalStyles.block, globalStyles.headerMargin, styles.mobilePaddingLeft].join(' ')}>
            <PageHeading style={{color:'white'}} title={'О компании'} />
            <motion.div className={styles.headText}
                transition={{ duration: 2, ease: 'easeInOut' }}
                initial={{ opacity: 0 }}
                        viewport={{ amount:'some' }}
                whileInView={{ opacity: 1 }}
                 >
                <h1 className={styles.title}> <b>ITWEBS</b> — это проще, чем кажется</h1>
                <h2 className={styles.subtitle}>Мы создаём инструменты для роста вашего бизнеса. Говорим на языке прибыли, а не кода. Всю техническую часть берём на себя, чтобы вы могли сосредоточиться на главном.</h2>
            </motion.div>
            <div className={styles.triangles}>
                <motion.div
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
                    initial={{ transform: 'translateX(-99%)' }}
                    whileInView={{ transform: 'translateX(0%)' }}
                    viewport={{ amount: 'some' }}
                    className={styles.triangleLeft}>
                    <svg style={{ position: 'absolute',scale:1.1 }} className={styles.triangleOne} width='10vw' height="25vw" viewBox={`0 0 137 274`} fill="none" xmlns="${process.env.BACKSEC}://www.w3.org/2000/svg">
                        <path d="M136.999 0L137 274H0L136.999 0Z" fill="#007CF8" />
                    </svg>
                    <div className={styles.headTriangleText} style={{ justifyContent: 'flex-end', marginBottom: '2vw' }}>
                        <div className={styles.headTextMain} style={{ textAlign: 'end' }}>
                            +5 <span>лет</span>
                        </div>
                        <div className={styles.headTextSec} style={{ textAlign: 'end' }}>
                            Опыт работы
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{transform:'translateX(40%)'}}
                        viewport={{ amount:'some' }}
                    transition={{duration:1,ease:'easeOut'}}
                    whileInView={{transform:'translateX(0)'}}
                    className={styles.triangleRight}>
                    <svg style={{ position: 'absolute', scale:1.1 }} className={styles.triangleOne} width="10vw" height="25vw" viewBox={`0 0 137 274`} fill="none" xmlns="${process.env.BACKSEC}://www.w3.org/2000/svg">
                        <path d="M0.000808716 274L0 0H137L0.000808716 274Z" fill="#007CF8" />
                    </svg>
                    <div className={styles.headTriangleText}>
                        <div className={styles.headTextMain}>
                            100+
                        </div>
                        <div className={styles.headTextSec}>
                            Готовых проектов
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutHeadBlock;