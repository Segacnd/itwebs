'use client'
import { useEffect, useState } from 'react';
import * as styles from './globales.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';

const UpButton = () => {
    const [show, setShow] = useState(false);
    const arrowUp = () => {
        if (window.scrollY - window.innerHeight > 0) {
            !show && setShow(true);
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', arrowUp);
    }, [])
    return (
        <>
            {show === true ?
                <div onClick={() => {
                    const int = setInterval(()=>{
                        if(window && window.scrollY<=0)
                            clearInterval(int);
                        window&&window.scrollTo(0,window.scrollY-20);
                    },5)
                }} className={styles.upButton}>
                    <Icon icon="pixelarticons:arrow-up" width={window &&window.innerWidth > 800 ? "2.5vw" : "10vw"} color='#007CF8' height={window.innerWidth > 800 ? "2.5vw" : "10vw"} />
                </div>
                :
                <>
                </>
            }
        </>
    )
}

export default UpButton;