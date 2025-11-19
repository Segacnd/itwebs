
import { Icon } from '@iconify/react';
import * as styles from './vacancies.module.css';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from '../about/AboutBlockHeading';
import * as motion from 'motion/react-client';

const VacanciesAdvantages = () => {
    class Advantage {
        constructor(name, iconName) {
            this.name = name;
            this.iconName = iconName;
        }
    }
    const advantages = [
        new Advantage("карьерный рост", "charm:rocket"), new Advantage("современные технологии", "ri:computer-line"), new Advantage("свобода идей", "cuida:lamp-on-outline"),
        new Advantage("командная работа", "ri:team-line"), new Advantage("конкурентная зарплата", "streamline-ultimate:cash-briefcase")
    ]
    return (
        <div className={globalStyles.block + ' ' + styles.advatangesBlock}>
            <motion.h3
                initial={{ transform: `translateY(-10svh)` }}
                whileInView={{ transform: 'translateY(0)' }}
                        viewport={{ amount:'some' }}
                transition={{ duration: 1 }}
                className={styles.advantagesHeading}>почему стоит работать с нами</motion.h3>
            <div className={styles.advantagesContainer}>
                {advantages.slice(0, 4).map(item => (
                    <motion.div
                    key={item.name}
                    style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center', position:'relative'}}
                    initial={{top:'20svh'}}
                        viewport={{ amount:'some' }}
                    transition={{duration:1}}
                    whileInView={{top:'0'}}
                    >
                        <div className={styles.advantageItem}>
                            <Icon className={styles.advantageItemIcon} icon={item.iconName} />
                            <div className={styles.advantageName}>{item.name}</div>
                        </div>
                    </motion.div>
                ))}
                
            </div>
        </div>
    )
}

export default VacanciesAdvantages;