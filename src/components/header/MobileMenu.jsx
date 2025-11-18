'use client'
import * as styles from './header.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';

const MobileMenu = ({ setOpen, open }) => {
    const [opened, setOpened] = useState(false);
    useEffect(() => {
        if (open) {
            setTimeout(() => setOpened(true), 0);
        } else {
            setTimeout(() => setOpened(false), 2000)
        }
    }, [, open])
    return (
        <div className={styles.mobileMenuComponent} style={{ height: open ? '100svh' : '0' }}>
            <div style={{ width: '90vw', padding: '5vw', transition: '1s', display: 'flex', position: 'relative', top: opened ? '0' : '-200svh', height: open ? '90svh' : 0 }}>
                <Icon onClick={() => setOpen(false)} style={{ alignSelf: 'flex-end', zIndex: 99, position: 'absolute', width: '7vw', height: '7vw' }} icon="line-md:close" color='gray' />
                <div className={[styles.mobileMenuLinkss, open ? styles.mobileMenuLinksOpen : ''].join(' ')}>
                    <Link onClick={() => setOpen(false)} className={styles.navLink} href={'/'}>
                        Главная
                    </Link>
                    <Link onClick={() => setOpen(false)} className={styles.navLink} href={'/about'}>
                        О нас
                    </Link>
                    <Link onClick={() => setOpen(false)} className={styles.navLink} href={'/development'}>
                        Разработка
                    </Link>
                    <Link onClick={() => setOpen(false)} className={styles.navLink} href={'/promotion'}>
                        Продвижение
                    </Link>
                    <Link onClick={() => setOpen(false)} className={styles.expressLink} href={'/development/express'}>
                        Экспресс разработка
                    </Link>
                    <Link onClick={() => setOpen(false)} className={styles.navLink} href={'/vacancies'}>
                        Вакансии
                    </Link>
                    <Link onClick={() => setOpen(false)} className={styles.navLink} href={'/contacts'}>
                        Контакты
                    </Link>
                    
                </div>

                {open &&
                    <div className={styles.mobileMenuDown}>
                        <Icon onClick={() => window.open('https://instagram.com/its_belarus')} className={styles.socialLink} icon="line-md:instagram" width="10vw" height="10vw" />
                        <Icon onClick={() => window.open('https://t.me/timoshinski')} className={styles.socialLink} icon="line-md:telegram" width="10vw" height="10vw" />
                        <Link href={'/'} className={styles.mobileMenuLogo}>ITWEBS</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default MobileMenu;