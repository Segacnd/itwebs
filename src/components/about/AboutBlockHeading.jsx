'use client'
import * as motion from 'motion/react-client';
import * as styles from './about.module.css';
import { useEffect, useState } from 'react';
import { useSegmentState } from 'next/dist/next-devtools/userspace/app/segment-explorer-node';

const AboutBlockHeading = ({ style, text, size, weight, transform }) => {
    const [wind,setWind] = useState(null);
    useEffect(()=>{
        setWind(window)
    },[])
    return (
        <div className={styles.blockHeading} style={{ ...style }}>
            <motion.div
                className={styles.blockHeadingMotion}
                transition={{ duration: 1, ease: 'easeOut' }}
                initial={{ transform: 'translateY(0)' }}
                whileInView={{ transform: wind&&wind.innerWidth<=900?'translateY(0svh)':'translateY(-10svh)' }}
                viewport={{ amount: 0.4 }}
            >
                <h2 style={{fontSize: size, fontWeight:weight, textTransform:transform}}>{text}</h2></motion.div>
        </div>

    )
}

export default AboutBlockHeading;