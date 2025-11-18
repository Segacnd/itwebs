
import * as styles from './globales.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';

const PageHeading = ({ title, style }) => {
    return (
        <div style={style} className={styles.pageHeading}>
            <Icon className={styles.pghdI} icon="mdi:triangle" style={{transform:'rotateZ(180deg)', width:"2vw",height:'2vw'}} color='#007CF8' />
            <div>{title}</div>
        </div>
    )
}

export default PageHeading;