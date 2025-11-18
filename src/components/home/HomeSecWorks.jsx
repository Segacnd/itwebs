'use server'
import * as globalStyles from '../../styles/app.module.css';
import * as styles from './homeSec.module.css';
import * as motion from 'motion/react-client'
import { Icon } from '@iconify/react/dist/iconify.js';
import Article from '../global/Article';
import Link from 'next/link';
import '../../../envConfig';
import Image from 'next/image';

const HomeSecWorks = async () => {
    return (
        <div className={globalStyles.block}>
            <Article styles={{ position: 'relative', width: '100vw' }} heading='Наши работы' />
            <Link href={'/about#works'} className={styles.container}>
                <div className={styles.backContainer}>
                    <div href={'/about#works'} className={styles.containerText}>
                        <div>Посмотреть портфолио</div>
                        <Icon icon="line-md:arrow-right" className={styles.backIcon} />
                    </div>
                </div>
                <div className={styles.containerImage}>
                    <Image src={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/home-works/esk.png`} alt={'Works examples'} title={'Works examples'} fill={true}/>
                </div>
            </Link>
            <Icon icon="mingcute:finger-tap-line" className={styles.finger} />
        </div>
    )
}

export default HomeSecWorks;