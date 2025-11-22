'use client'
import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './about.module.css';
import * as motion from 'motion/react-client'
import { useEffect, useState } from 'react';

// TODO: 
const AboutWorthItem = ({ icon = 'radix-icons:value-none', name = 'name', description = 'desc', id, delay = 0 }) => {
    const [wind,setWind] = useState(null);
    useEffect(()=>{
        setWind(window)
    },[])
    return (
        <motion.div
            transition={{ ease: 'easeOut', duration: 1, delay: delay / 10 * 3 }}
            initial={{ transform: 'translateY(0svh)' }}
            style={{zIndex:wind&&id>=2?12:10,height:'80svh',width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}
            whileInView={{ transform: wind&&id>=2&&wind.innerWidth<=900?'translateY(-80svh)':'translateY(-40svh)' }}
            viewport={{amount:'some'}}
        >
            <div className={styles.worthsItem}>
                <Icon className={styles.worthIcon} icon={icon} color='white' />
                <h2 className={styles.worthName}>{name}</h2>
                <div className={styles.worthDesc}>{description}</div>
            </div>
        </motion.div>
    )
}

export default AboutWorthItem;