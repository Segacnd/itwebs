'use client'

import * as styles from './backArrow.module.css';
import { Icon } from "@iconify/react"

export default function BackArrow(){
    return(
        <>
                <Icon className={styles.icon} onClick={()=>window.history.back()} icon="line-md:arrow-left" />
        </>
    )
}