"use client"
import { useEffect, useRef, useState } from 'react';
import * as styles from './cookie.module.css';
import { Icon } from '@iconify/react';


const CookieComponent = () => {
    let component = useRef();
    useEffect(()=>{
        let storage = localStorage.getItem('Cookie-Agreement');
        if(!storage){
            handleOpen();
        }
    },[])
    const handleOpen = () => {
        component.current.style.transform = 'translateY(0)'
    }
    const handleAgree = () => {
        localStorage.setItem('Cookie-Agreement','true');
        handleClose();
    }
    const handleClose = () => {
        component.current.style.transform = 'translateY(30svh)';
    }
    return(
        <div ref={component} className={styles.component}>
            <div className={styles.textContainer}>
                <div className={styles.heading}>
                    Мы используем cookies <Icon icon={'emojione:cookie'} className={styles.cookieIcon} />
                </div>
                <div className={styles.description}>
                    Нажимая кнопку принять вы соглашаетесь на использование cookies.
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleAgree}>
                    Принять
                </button>
            </div>
        </div>
    )
}

export default CookieComponent;