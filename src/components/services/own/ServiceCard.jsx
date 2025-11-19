'use client'

import Image from 'next/image';
import { Icon } from '@iconify/react';
import * as styles from './serviceCard.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ServiceCard = ({ title, image, link, style }) => {
    let [styleses,setStyleses] = useState({});
    useEffect(()=>{
       window&&window.innerWidth>800 && setStyleses({...style});
    },[])
    return (
        <div className={styles.main} style={{ ...styleses }}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <Link href={link} style={{ textDecoration: 'none', margin: 0 }}>
                    <button className={styles.button}>
                        <div className={styles.buttonText}>подробнее</div>
                        <Icon icon="solar:arrow-right-linear" className={styles.itemIcon} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard;