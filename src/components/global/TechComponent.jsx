'use client'
import * as styles from '../home/homeTech.module.css';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import MobileTech from './MobileTech';

const TechComponents = () => {
    const techStack = [
        'mdi:react', 'cib:js', 'flowbite:html-solid', 'fa7-brands:css', 'solar:figma-bold-duotone', 'mage:photoshop', 'cib:next-js',
        'la:node', 'file-icons:nestjs', 'file-icons:1c', 'lineicons:expressjs', 'cib:postgresql', 'devicon-plain:mongodb-wordmark',
        'devicon-plain:mysql-wordmark', 'hugeicons:php', 'uil:docker', 'bi:git', 'uil:linux', 'file-icons:redux', 'devicon-plain:mobx',
        'devicon-plain:firebase-wordmark', 'devicon-plain:supabase-wordmark', 'simple-icons:rabbitmq'
    ]
    const [wind, setWind] = useState(null);
    useEffect(() => {
        setWind(window);
    }, [])
    return (
        <>
            {
                wind && wind.innerWidth < 900 ?
                        <MobileTech />
                    :
                    <div styles={{ width: '100vw', overflow: 'hidden' }}>
                        <div className={styles.carousel}>
                            {
                                techStack.slice(0, 11).map((item, ind, arr) => (
                                    <div key={item} className={styles.carouselItem} style={{ animationDelay: `calc(45s / ${arr.length} * (${arr.length} - ${ind + 1}) * -1)` }}>
                                        <Icon icon={item} width={wind && wind.innerWidth < 900 ? '20vw' : '7vw'} height={wind && wind.innerWidth < 900 ? '20vw' : '7vw'} style={{ color: 'black' }} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.carousel} style={{ marginTop: '9vw' }}>
                            {
                                techStack.slice(11).map((item, ind, arr) => (
                                    <div key={item} className={styles.carouselItem} style={{ animationDelay: `calc(45s / ${arr.length} * (${arr.length} - ${ind + 1}) * -1)`, animationDuration: '45s', animationDirection: 'reverse' }}>
                                        <Icon icon={item} width={wind && wind.innerWidth < 900 ? '20vw' : '7vw'} height={wind && wind.innerWidth < 900 ? '20vw' : '7vw'} style={{ color: 'black' }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default TechComponents