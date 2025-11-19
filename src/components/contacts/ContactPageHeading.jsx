
import { Icon } from '@iconify/react';
import PageHeading from '../global/PageHeading';
import ContactOfficeItem from './ContactOfficeItem';
import * as styles from './contacts.module.css';
import Link from 'next/link';

const ContactPageHeading = () => {
    class Office {
        constructor(heading, address, maplink, phone, email) {
            this.heading = heading;
            this.address = address;
            this.phone = phone;
            this.email = email;
            this.maplink = maplink;
        }
    }
    const offices = [
        new Office('Офис в Минске', 'проспект Газеты Звязда, д. 16,\nпом. 42-1', 'https://yandex.by/maps/-/CLfteOjg', '+375 (29) 785-38-25', 'its-agency@outlook.com'),
        new Office('Офис в Москве', 'проспект Мира, д. 102, к. 1,\nпом. 3/7', 'https://yandex.by/maps/-/CLfteH7G', '+7 (999) 857-76-60', 'its-agency@outlook.com')
    ]
    return (
        <div className={styles.pageHeading}>
            <PageHeading title={'Контакты'} />
            <div className={styles.officesContainer}>
                {
                    offices.map(item => (

                            <ContactOfficeItem {...item} />

                    ))
                }
            </div>
            <div className={styles.socialBlock}>
                <h2>Мы в социальных сетях</h2>
                <div className={styles.socialLinks}>
                    <Link className={styles.socialLink} href={`https://instagram.com/it.webs`}>
                        <Icon className={styles.socialLinkIcon} icon={'line-md:instagram'} style={{ color: '#007CF8' }}  />
                    </Link>
                    <Link className={styles.socialLink} href={`https://t.me/timoshinski`}>
                        <Icon className={styles.socialLinkIcon} icon={'line-md:telegram'} style={{ color: '#007CF8' }}  />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactPageHeading;