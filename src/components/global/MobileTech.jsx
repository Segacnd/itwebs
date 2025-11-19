
import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './globales.module.css';
import { useState, useEffect } from 'react';

const MobileTech = () => {
    const techStack = [
        'mdi:react', 'cib:js', 'flowbite:html-solid', 'fa7-brands:css', 'solar:figma-bold-duotone', 'mage:photoshop', 'cib:next-js',
        'la:node', 'file-icons:nestjs', 'file-icons:1c', 'lineicons:expressjs', 'cib:postgresql', 'devicon-plain:mongodb-wordmark',
        'devicon-plain:mysql-wordmark', 'hugeicons:php', 'uil:docker', 'bi:git', 'uil:linux', 'file-icons:redux', 'devicon-plain:mobx',
        'devicon-plain:firebase-wordmark', 'devicon-plain:supabase-wordmark', 'simple-icons:rabbitmq'
    ]
    const [wind, setWind] = useState(null);
    const lines = [];
    const slidesLength = [8, 6, 9]
    let count = 0;
    for(let i=0;i<techStack.length;){
        let curArr;
        if(techStack.length-i<slidesLength[count])
            curArr=techStack.slice(i)
        else
            curArr = techStack.slice(i,i+slidesLength[count]);
        lines.push(curArr);
        i+=slidesLength[count];
        count++
    }
    useEffect(() => {
        setWind(window);
    }, [])
    return (
        <div className={styles.mobileTechComponent}>
            {lines.map(item=>(
                <div key={item.join('-')} className={styles.mobileTechLine}>
                    {item.map(el=>(
                        <div key={el} className={styles.mobileTechItem}>
                            <Icon icon={el} className={styles.mobileTechIcon} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MobileTech;