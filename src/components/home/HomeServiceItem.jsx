'use server'
import Link from 'next/link';
import * as styles from './homeServices.module.css';
import "../../../envConfig.js";
import { Icon } from '@iconify/react';


const HomeServiceItem = async (props) => {
    return (
        <div className={styles.serviceItem}>
            <div className={styles.serviceImageContainer}>
                <img src={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/home-services/${props.image}`} className={styles.serviceImage} alt={props.name ? props.name + ' ITs' : 'Разработка сайтов Беларусь'} />
            </div>
            <div className={styles.serviceContent}>
                <div className={styles.serviceNum}>
                    {props.num || '00'}
                </div>
                <div className={styles.serviceText}>
                    {props.name&&props.name.split('"').map(item => (
                        <h3 key={item} className={styles.serviceName}>
                            {item}
                        </h3>
                    ))}
                </div>

                <Link style={{ zIndex: '10', textDecoration: 'none' }} href={props.link || '/'}>
                    <button className={styles.serviceButton}>
                        подробнее <Icon icon="ix:arrow-diagonal-top-right" width="1.5vw" height="1.5vw" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomeServiceItem