'use client'

import React, { useEffect, useRef, useState } from "react";
import styles from '../../home/home-first.module.css';
import ConsultButton from "../../buttons/ConsultButton";
import * as motion from 'motion/react-client';


const MogilevFirstBlock = () => {
    const [wind,setWind] = useState(null);
    useEffect(()=>{
        window && setWind(window);
    },[])
    return (
        <div className={styles.block}>
            <motion.h1
                initial={{ transform: 'translateY(-90%)' }}
                whileInView={{ transform: 'translateY(0)' }}
                viewport={{ amount: 'some' }}
                transition={{ duration: 1 }}
                className={styles.title}>
                Digital агентство itwebs
            </motion.h1>
            <motion.h2
                initial={{ transform: 'translateY(90%)' }}
                whileInView={{ transform: 'translateY(0)' }}
                        viewport={{ amount:'some' }}
                transition={{ duration: 1 }}
                className={styles.subtitle}>
                Разработка сайтов под ключ и интернет-маркетинг на территории г. Могилев и Могилевской обл.
            </motion.h2>

            <ConsultButton styles={{ transform: wind && wind.innerWidth <= 800 ? 'translateX(-4vw) translateY(-10svh)' : '' }} />
        </div>
    )
}

export default MogilevFirstBlock;