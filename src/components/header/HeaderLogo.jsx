'use client';

import React, { useEffect, useState } from "react";
import styles from './logo.module.css';
import Link from "next/link";
import logoWeb from '../../assets/LogoWeb.svg';
import MobileLogo from '../../assets/mobileLogo.svg'
import Image from "next/image";

const HeaderLogo = ({style}) => {

    const [wind,setWind] = useState(null);

    useEffect(()=>{
        window&&setWind(window);
    },[])

    return (
        <div className={styles.component} style={style}>
            <Link href={'/'} className={styles.linkComp} style={{textDecoration:'none'}} >
                <Image alt={'LogoWeb'} src={wind&&wind.innerWidth<=800?MobileLogo:logoWeb} className={styles.logoWeb} />
                <div className={styles.container}>
                    <div>ITWEBS</div>
                </div>
            </Link>

        </div>
    )
}

export default HeaderLogo;