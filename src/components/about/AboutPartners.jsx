'use server'
import * as styles from './about.module.css';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from './AboutBlockHeading';
import { loadPartners } from '../../services/loadPartners.service';
import Image from 'next/image';
import '../../../envConfig.js';


const AboutPartners = async () => {
    class Partner {
        constructor(name, image) {
            this.name = name;
            this.image = image;
        }
    }
    const defaultPartners = [
        new Partner('Grigof Jewelery', 'grigof-sec.svg'), new Partner('СТО Лодок', 'stolodok-sec.svg'), new Partner('Аренда автомобилей YANADRIVE', 'YANADRIVE.webp'),
        new Partner('Европейская сервисная компания', 'esk-third.svg')
    ]

    let partners = await loadPartners();


    if (!partners || !partners.length) {
        partners = [...defaultPartners];
    }

    return (
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Наши партнеры'} style={{ alignSelf: 'flex-end', paddingRight: '6vw' }} />
            <div className={styles.aboutPartnersContainer}>
                {partners.map((item,ind) => (
                    <div className={styles.aboutPartnerItem} key={ind+1}>
                        <Image title={item.name} fill={true} src={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/partners/${item.image}`} className={styles.aboutPartnersImage} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutPartners;