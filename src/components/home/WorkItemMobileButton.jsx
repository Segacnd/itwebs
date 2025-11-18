'use client'
import Link from 'next/link';
import * as styles from './homeWorks.module.css';

const WorkItemMobileButton = ({link='/'}) => {
    if (window&&window.innerWidth < 900)
        return (
            <Link href={link} className={styles.workItemMobileButton}>
                подробнее
            </Link>
        )
    else
        return (
            <>

            </>
        )
}

export default WorkItemMobileButton;