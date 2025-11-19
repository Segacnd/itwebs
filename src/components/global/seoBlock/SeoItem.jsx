'use server'
import * as styles from './pageSeo.module.css';
import { Icon } from '@iconify/react';

const SeoItem = async ({header, text}) => {
    return(
        <div className={styles.seoParagraph}>
            <div className={styles.paragraphHead}>
                {header}
            </div>
            <div className={styles.paragraphText}>
                {text}
            </div>
        </div>
    )
}

export default SeoItem