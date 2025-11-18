'use client'
import * as styles from './vacancieClear.module.css';
import Image from 'next/image';
import * as desktopImg from '../../assets/vacancie-clear-desktop.svg';
import * as motion from 'motion/react-client';


const VacancieClear = () => {
    return (
        <div className={styles.component}>
            <motion.div
                transition={{ ease: 'easeInOut', duration: 1 }}
                initial={{ transform: 'scale(0)' }}
                viewport={{ amount: 'some' }}
                whileInView={{ transform: 'scale(1)' }}
                className={styles.header}>
                <h2>Открытых вакансий на данный момент нет</h2>
                <p>Вы можете заполнить форму внизу страницы и ваша анкета будет в приоритете</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 1.3 }}
                viewport={{ amount: 'some' }}
                whileInView={{ opacity: 1 }}
                className={styles.imageContainer}>
                <Image className={styles.imageItem} src={desktopImg} title='Вакансии отсутствуют' alt='Вакансии отсутствуют' />
            </motion.div>
        </div>
    )
}

export default VacancieClear;