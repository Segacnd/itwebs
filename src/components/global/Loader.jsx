'use client'
import * as styles from './globales.module.css';

const Loader = () => {
    return (
        <div className={styles.loaderComponent} onClick={(e)=>e.stopPropagation()}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader;