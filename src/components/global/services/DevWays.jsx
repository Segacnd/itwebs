
import * as styles from './devWays.module.css';
import * as motion from 'motion/react-client';
import { Icon } from '@iconify/react/dist/iconify.js';

const DevWays = ({items}) => {
    return (
        <div className={styles.container}>
            {items.map((item, ind) => (
                <motion.div
                    initial={{ transform: (ind + 1) % 2 == 0 ? 'translateY(40%)' : 'translateY(-40%)' }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.4 }}
                    whileInView={{ transform: 'translateY(0)' }}
                    key={item.name} className={styles.containerItem}>
                    <Icon icon={item.icon} className={styles.containerIcon} style={{ animationDelay: (ind + 1) - ind / 2 + 's' }} />
                    <p className={styles.containerText}>{item.name}</p>
                </motion.div>
            ))}
        </div>
    )
}

export default DevWays;