import * as styles from './homeWorks.module.css';
import * as motion from 'motion/react-client';
import { loadWorksImage } from '@/services/loadWorksImage.service';
import Image from 'next/image';

const HomeWorkItem = (props) => {
    return (
        <div className={styles.worksItem}>
            <div className={styles.workName}>{props.text}</div>
            <motion.div
                initial={{ scale: 0.8, zIndex: 9 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
                whileInView={{ scale: 1, zIndex: 10, opacity: 1 }}
                className={styles.workImagess}
            >
                    <Image  fill={true} src={`http://45.135.234.73:8000/home-works/${props.image}`} alt={`itwebs. Разработка сайтов. ${props.text}`} />
            </motion.div>
        </div>
    )
}

export default HomeWorkItem;
