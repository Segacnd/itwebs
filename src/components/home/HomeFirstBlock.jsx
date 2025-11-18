'use client'

import React, { useEffect, useRef, useState } from "react";
import styles from './home-first.module.css';
import ConsultButton from "../buttons/ConsultButton";
import { useSelector } from "react-redux";
import { useAppSelector, useAppStore } from '../../store/hooks';
import { Icon } from "@iconify/react/dist/iconify.js";
import * as motion from 'motion/react-client';


const HomeFirstBlock = () => {
    const [wind, setWind] = useState(null);
    useEffect(() => {
        setWind(window);
    }, []);
    return (
        <div className={styles.block}>
            <motion.h1
                initial={{ transform: 'translateY(-90%)' }}
                whileInView={{ transform: 'translateY(0)' }}
                viewport={{ amount: 'some' }}
                transition={{ duration: 1 }}
                className={styles.title}>
                Студия веб-разработки ITWEBS
            </motion.h1>
            <motion.h2
                initial={{ transform: 'translateY(20svh)' }}
                whileInView={{ transform: 'translateY(0)' }}
                        viewport={{ amount:'some' }}
                transition={{ duration: 1 }}
                className={styles.subtitle}>
                Мы занимаемся кодом, а вы — бизнесом<br/>
                Помогаем вашему бизнесу расти и развиваться быстрее: сайты, CRM-системы, веб-приложения, SEO.
            </motion.h2>
            
                <ConsultButton styles={{ transform: wind && wind.innerWidth <= 900 ? 'translateX(-5vw) translateY(-10svh)' : '' }} />

        </div>
    )
}

export default HomeFirstBlock;