'use client'
import Link from 'next/link';
import * as styles from './footer.module.css';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { tokenAuth } from '../../services/admin/tokenAuth.service';
import dynamic from "next/dynamic";


const HeaderLogo = dynamic(() => import('../header/HeaderLogo'), { ssr: false })

const Footer = () => {
    const [data, setData] = useState({});
    const [openUp, setOpenUp] = useState(false);
    const [wind, setWind] = useState(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        window && setWind(window);
        const token = localStorage.getItem('token');
        if (token)
            try {
                tokenAuth(token).then(res => {
                    dispatch({ type: "LOGIN", payload: { ...res } })
                    toast.success("You are welcome");
                }).catch(err => {
                    if (err.message == 'server')
                        localStorage.removeItem('token');
                });
            }catch(err){
                
            }
            
    }, [])
    return (
        <>

            <footer className={styles.component}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerColumn}>
                            <div className={styles.logoContainer}>
                                <HeaderLogo />
                            </div>
                            <div className={styles.footerTitle}>
                                <h6>Технологии - наш иструмент</h6>
                                <h6>Результат - ваш сайт</h6>
                            </div>
                            <div className={styles.footerSocialLinks}>
                                <Link className={styles.footerSocialLink} href={`https://instagram.com/it.webs`}>
                                    <Icon className={styles.footerSocialIcon} icon="line-md:instagram" />
                                </Link>
                                <Link className={styles.footerSocialLink} href={`https://t.me/timoshinski`}>
                                    <Icon className={styles.footerSocialIcon} icon="line-md:telegram" />
                                </Link>
                            </div>
                        </div>
                        {
                            wind && wind.innerWidth >= 900 &&
                            <div className={styles.footerColumn}>
                                <div className={styles.footerSubtitle}>
                                    Меню
                                </div>
                                <Link key={'about'} href={'/about'} className={styles.footerLink}>
                                    О компании
                                    <div className={styles.linkUnderline}></div>
                                </Link>
                                <Link key={'development'} href={'/development'} className={styles.footerLink}>
                                    Разработка
                                    <div className={styles.linkUnderline}></div>
                                </Link>
                                <Link key={'promotion'} href={'/promotion'} className={styles.footerLink}>
                                    Продвижение
                                    <div className={styles.linkUnderline}></div>
                                </Link>
                                <Link key={'vacancies'} href={'/vacancies'} className={styles.footerLink}>
                                    Вакансии
                                    <div className={styles.linkUnderline}></div>
                                </Link>
                            </div>
                        }
                        <div className={styles.footerColumn}>
                            <div className={styles.footerSubtitle} style={{ alignSelf: 'center' }}>
                                Контакты
                            </div>
                            <div onClick={() => window.open('tel:+375297853825')} style={{color: 'white', textDecoration:'none'}} className={styles.contactItem}>
                                <Icon className={styles.contactItemIcon} icon="ic:baseline-phone" />
                                <a href='tel:+375297853825' style={{color: 'white'}}>
                                    +375 29 785 38 25
                                </a>
                            </div>
                            <div onClick={() => window.open('mailto:its-company@outlook.com')}
                                className={styles.contactItem}>
                                <Icon className={styles.contactItemIcon} icon="ic:outline-email" />
                                its-agency@outlook.com
                            </div>
                            <div className={styles.footerSubtitle} style={{ alignSelf: 'center' }}>Адреса</div>
                            <div onClick={()=>window.open('https://yandex.by/maps/-/CLVOBL-U')} className={styles.contactItem}>г. Минск, пр-т Газеты Звязда, д. 16, пом. 42-1</div>
                            <div onClick={()=>window.open('https://yandex.by/maps/-/CLVOFML8')} className={styles.contactItem}>г. Москва, пр-т Мира, д.102, к. 1, пом. 3/7</div>
                        </div>
                    </div>
                    <div className={styles.footerDown}>
                        <div>ООО: "ПрофИнфоТех-С"</div>
                        <div>УНП: 193922069</div>
                        <Link className={styles.policyLink} href={'/policy'} style={{ maxWidth: 'max-content', width: 'auto' }}>Политика обработки персональных данных</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;