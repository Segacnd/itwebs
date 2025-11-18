'use client'
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as styles from './header.module.css';
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeaderLogo from './HeaderLogo';
import MobileMenu from "./MobileMenu";
import ConsultModal from "../global/ConsultModal";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openConsult,setOpenConsult] = useState(false);
    const [scroll,setScroll] = useState(0);
    // const [consultStyles,setConsultStyles] = useState([styles.consultRecomendContainer]);
    let bg = useMemo(()=>{
        if(scroll>0){
            return ''
        }
        else{
            return 'none'
        }
    },[scroll]);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScroll(window.scrollY);
        })
    },[])
    // let interv = setInterval(()=>{
    //     consultStyles.length<=1?setConsultStyles([styles.consultRecomendContainer,styles.active]):setConsultStyles([styles.consultRecomendContainer]);
    // },5000);

    // useEffect(()=>{
    //     return(()=>{
    //         clearInterval(interv);
    //     })
    // },[])
    return (
        <>
        {
            openConsult && <ConsultModal setOpen={setOpenConsult} />
        }
            <MobileMenu setOpen={setMobileMenu} open={mobileMenu} />
            <header className={styles.component} style={{background: bg}} >
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <HeaderLogo />
                    </div>
                    <div className={styles.navigation}>
                        <Link className={styles.navLink} href={'/about'}>
                            О нас
                            <div className={styles.linkUnderline}></div>
                        </Link>
                        <Link className={styles.navLink} href={'/development'}>
                            Разработка
                            <div className={styles.linkUnderline}></div>
                        </Link>
                        {/* <Link className={styles.navLink} href={'/marketing'}>
                            Маркетинг
                            <div className={styles.linkUnderline}></div>
                        </Link> */}
                        <Link className={styles.navLink} href={'/promotion'}>
                            Продвижение
                            <div className={styles.linkUnderline}></div>
                        </Link>
                        {/* <Link className={styles.navLink} href={'/vacancies'}>
                            Вакансии
                            <div className={styles.linkUnderline}></div>
                        </Link> */}
                        <Link className={styles.navLink} href={'/contacts'}>
                            Контакты
                            <div className={styles.linkUnderline}></div>
                        </Link>
                        <Link className={styles.expressLink} href={'/development/express'}>
                            Экспресс разработка
                            <div className={styles.linkUnderline}></div>
                        </Link>
                    </div>
                    <div className={styles.links}>
                        <Icon onClick={() => window.open('https://instagram.com/it.webs')} className={styles.socialLink} icon="line-md:instagram" style={{width:'2vw',height:'2vw'}} />
                        <Icon onClick={() => window.open('https://t.me/timoshinski')} className={styles.socialLink} icon="line-md:telegram" style={{width:'2vw',height:'2vw'}} />
                        <a href="tel:+375297853825" className={styles.socialLink}>+375 (29) 785-38-25</a>
                    </div>

                    <button className={styles.mobileMenuOpenButton} onClick={() => setMobileMenu(prev => !prev)}>
                        {
                            mobileMenu ?
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M21 2.47506C21 2.76498 20.765 3 20.4751 3H2.42519C1.63808 3 1 2.36192 1 1.57481C1 0.731642 1.72801 0.0728011 2.567 0.1567L20.5273 1.95273C20.7956 1.97956 21 2.20537 21 2.47506Z" fill="#007CF8" />
                                    <path d="M21 10.4751C21 10.765 20.765 11 20.4751 11H2.42519C1.63808 11 1 10.3619 1 9.57481C1 8.73164 1.72801 8.0728 2.567 8.1567L20.5273 9.95273C20.7956 9.97956 21 10.2054 21 10.4751Z" fill="#007CF8" />
                                    <path d="M1 4.52494C1 4.23502 1.23502 4 1.52494 4H19.5748C20.3619 4 21 4.63808 21 5.42519C21 6.26836 20.272 6.9272 19.433 6.8433L1.4727 5.04727C1.20436 5.02044 1 4.79463 1 4.52494Z" fill="#007CF8" />
                                    <path d="M1 12.5249C1 12.235 1.23502 12 1.52494 12H19.5748C20.3619 12 21 12.6381 21 13.4252C21 14.2684 20.272 14.9272 19.433 14.8433L1.4727 13.0473C1.20436 13.0204 1 12.7946 1 12.5249Z" fill="#007CF8" />
                                </svg>
                                :
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M0 0.524938C0 0.235023 0.235023 0 0.524938 0H18.5748C19.3619 0 20 0.638078 20 1.42519C20 2.26836 19.272 2.9272 18.433 2.8433L0.472704 1.04727C0.204355 1.02044 0 0.794625 0 0.524938Z" fill={'#F9F9F9'} />
                                    <path d="M0 8.52494C0 8.23502 0.235023 8 0.524938 8H18.5748C19.3619 8 20 8.63808 20 9.42519C20 10.2684 19.272 10.9272 18.433 10.8433L0.472704 9.04727C0.204355 9.02044 0 8.79463 0 8.52494Z" fill={'#F9F9F9'} />
                                    <path d="M20 6.47506C20 6.76498 19.765 7 19.4751 7H1.42519C0.638077 7 0 6.36192 0 5.57481C0 4.73164 0.72801 4.0728 1.567 4.1567L19.5273 5.95273C19.7956 5.97956 20 6.20537 20 6.47506Z" fill={'#F9F9F9'} />
                                    <path d="M20 14.4751C20 14.765 19.765 15 19.4751 15H1.42519C0.638077 15 0 14.3619 0 13.5748C0 12.7316 0.72801 12.0728 1.567 12.1567L19.5273 13.9527C19.7956 13.9796 20 14.2054 20 14.4751Z" fill={'#F9F9F9'} />
                                </svg>
                        }

                    </button>
                </div>
            </header>
            {/* <div className={styles.consultRecomendComponent}>
                <div className={consultStyles.join(' ')}>
                    <Icon icon={'mdi:spider-thread'} className={styles.spiderIcon} />
                    <div className={styles.consultComponent}>
                        <div className={styles.consultText}>
                            Консультация
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Header;