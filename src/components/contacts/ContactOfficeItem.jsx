'use client'

import { Icon } from '@iconify/react';
import * as styles from './contacts.module.css';

const ContactOfficeItem = ({heading,address,maplink,phone,email}) => {
    return(
        <div className={styles.contactOfficeItem}>
            <h2>{heading}</h2>
            <div onClick={()=>window.open(maplink)} style={{cursor:'pointer'}} className={styles.contactOfficeLine}>
                <Icon className={styles.contactOfficeIcon} icon={'line-md:map-marker-loop'} />
                <h3>{address}</h3>
            </div>
            <div onClick={()=>window.open(`tel:${phone}`,'_self')} className={styles.contactOfficeLine}>
                <Icon className={styles.contactOfficeIcon} icon={'line-md:phone-twotone'} />
                <h3>{phone}</h3>
            </div>
            <div onClick={()=>window.open(`mailto:${email}`)} className={styles.contactOfficeLine}>
                <Icon className={styles.contactOfficeIcon} icon={'line-md:email-twotone'} />
                <h3>{email}</h3>
            </div>
        </div>
    )
}

export default ContactOfficeItem