'use client'
import * as styles from '../about.module.css';
import * as motion from 'motion/react-client';

const AboutStageItem = ({ num, name, text }) => {
    return (
        <motion.div
            initial={{ transform: 'translateX(0)', opacity: 1 }}
            transition={{ duration: 1 }}
            whileInView={{ transform: 'translateX(0)', opacity: 1 }}
            viewport={{ amount: 'some' }}
            className={styles.aboutStageItemContainer}
            >
            <div className={styles.aboutStageNum}>
                0{num}
            </div>
            <div className={styles.aboutStageItem}>
                <svg className={styles.aboutStagesSecondSVG} width="100vw" height="100vw" viewBox="0 0 300 300" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M287 267C287 278.046 278.046 287 267 287H20C8.95431 287 0 278.046 0 267V4.83691C0 2.16555 2.16556 0 4.83691 0C7.50827 0 9.67383 2.16556 9.67383 4.83691V18.542C9.67383 28.7825 17.9754 37.084 28.2158 37.084H31.4414C41.6819 37.084 49.9834 28.7825 49.9834 18.542C49.9834 8.30153 58.2849 0 68.5254 0H267C278.046 0 287 8.95431 287 20V267Z" fill="black" />
                </svg>
                <h3 style={{marginBottom:'0'}} className={styles.aboutStageName}>
                    {name}
                </h3>
                <div className={styles.aboutStageText}>
                    {text}
                </div>
            </div>
        </motion.div>
    )
}

export default AboutStageItem