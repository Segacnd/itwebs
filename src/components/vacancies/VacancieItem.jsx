
import { Icon } from '@iconify/react';

import Link from 'next/link';
import * as styles from './vacancies.module.css';

const VacancieItem = ({ title, desc, image, link }) => {
    return (
        <div className={styles.vacancieItem} >
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={styles.vacancieBlur}></div>
            <div className={styles.vacancieText}>
                <div className={styles.vacancieTitle}>{title}</div>
                <div className={styles.vacancieDesc}>{desc}</div>
                <Link className={styles.vacancieItemLink} href={'/vacancies/' + link} style={{ textDecoration: 'none', color: 'white' }}>
                    <button className={styles.vacancieButton}>
                        Подробнее <Icon className={styles.vacancieButtonIcon} icon="ix:arrow-diagonal-top-right" />
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default VacancieItem;