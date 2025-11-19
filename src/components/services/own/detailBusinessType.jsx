'use server'

import * as styles from './byztypes.module.css';
import { Icon } from '@iconify/react';
import * as globalStyles from '../../../styles/app.module.css';
import * as motion from 'motion/react-client';

const DetailBusinessType = async ({ types, gets }) => {
    return (
        <div className={[globalStyles.block,styles.block].join(' ')} style={{maxHeight:'none'}}>
            <div className={styles.container} style={{overflow:'hidden'}}>
                <motion.div
                initial={{transform:'translateX(70%)'}}
                        viewport={{ amount:'some' }}
                transition={{duration:1}}
                whileInView={{transform: 'translateX(0)'}}
                className={styles.column}>
                    <Icon className={styles.icon} color='#007CF8' icon="icon-park-outline:user-business" />
                    <h3 className={styles.columnHeading}>для кого подойдет</h3>
                    <div style={{ paddingLeft: '4vw' }} className={styles.columnItems}>
                        {types && types.map((item,ind) => (
                            <div key={item+ind} className={styles.columnItem}>
                                <div className={styles.columnCircle}></div>
                                <h4 className={styles.columnItemText}>{item}</h4>
                            </div>
                        ))}
                    </div>

                </motion.div>
                <motion.div
                initial={{transform:'translateX(-95%)'}}
                        viewport={{ amount:'some' }}
                transition={{duration:1}}
                whileInView={{transform: 'translateX(0)'}}
                className={styles.column}>
                    <Icon className={styles.icon} icon="mdi:approve" color='#007CF8' />
                    <h3 className={styles.columnHeading}>что вы получаете</h3>
                    <div className={styles.columnItems}>
                        {gets && gets.map((item,ind) => (
                            <div key={item+ind} className={styles.columnItem}>
                                <div className={styles.columnCircle}></div>
                                <h4 className={styles.columnItemText}>{item}</h4>
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default DetailBusinessType;