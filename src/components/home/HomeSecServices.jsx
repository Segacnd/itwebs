import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './homeSecServices.module.css';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const HomeSecServices = async () => {
    return (
        <div className={styles.block}>
            <h6 className={styles.blockHeading}>
                Что для вас важнее прямо сейчас ?
            </h6>
            <div className={styles.mainContainer}>
                <motion.div
                initial={{transform:'translateX(-40%)'}}
                transition={{duration: 1}} 
                viewport={{amount: 'some'}}
                whileHover={{
                    transform: 'translateY(-10%)',
                    transition: {duration: 1}
                }}
                whileInView={{transform:'translateX(0)'}}
                className={styles.leftContainer}>
                    <div className={styles.containerHeadComponent}>
                        <Icon icon={'streamline:desktop-code-remix'} className={styles.containerHeadIcon} />
                        <p className={styles.containerHeadText}>Разработать сайт</p>
                    </div>
                    <Link href={'/development'} className={styles.containerButton} style={{fontWeight:400}}>
                        <span>Подробнее</span>
                        <Icon icon={'mingcute:arrow-right-up-line'} className={styles.buttonIcon} />
                    </Link>
                </motion.div>
                <motion.div
                initial={{transform:'translateX(40%)'}}
                transition={{duration: 1}}
                viewport={{amount: 'some'}}
                whileHover={{
                    transform: 'translateY(-10%)',
                    transition: {duration: 1}
                }}
                whileInView={{transform:'translateX(0)'}}
                className={styles.rightContainer}>
                    <div className={styles.containerHeadComponent}>
                        <Icon icon={'ant-design:stock-outlined'} className={styles.containerHeadIcon} />
                        <p className={styles.containerHeadText}>Запустить продвижение</p>
                    </div>
                    <Link href={'/promotion'} className={styles.containerButton}>
                        <span>Подробнее</span>
                        <Icon icon={'mingcute:arrow-right-up-line'} className={styles.buttonIcon} />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeSecServices;