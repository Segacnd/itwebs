"use client"
import { Icon } from '@iconify/react';
import * as globalStyles from '../../../styles/app.module.css';
import * as styles from './detailTech.module.css';
import { useEffect, useState } from 'react';

const DetailTech = ({ techIcons }) => {
    let [wind, setWind] = useState(null);
    const defaultTech = "cib:next-js uil:react skill-icons:expressjs-light fa-brands:js file-icons:nestjs bi:css bxl:postgresql solar:figma-bold-duotone fa-brands:node hugeicons:bash devicon-plain:docker devicon-plain:typescript".split(' ');
    let [newTech,setNewTech] = useState(techIcons && techIcons.length?techIcons:defaultTech);
    useEffect(() => {
        setTimeout(() => {
            setNewTech(prev=>window && window.innerWidth >= 800 ? prev.slice(0,(Math.floor(prev.length / 10)) * 10):prev.slice(0,Math.floor(prev.length/4)*4));
        }, 100);
    }, [])
    return (
        <div className={[globalStyles.block, styles.block].join(' ')}>
            <div className={styles.iconsContainer}>
                {newTech.map(item => (
                    <div className={styles.iconItem} key={item}>
                        <Icon color='white' className={styles.icon} icon={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailTech;

