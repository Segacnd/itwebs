'use client'
import * as styles from '../../styles/broken.module.css';
import {Icon} from '@iconify/react'
import {useRouter} from 'next/navigation'



const Broken = ({children}) => {
    const router = useRouter();
    return(
        <div className={styles.component}>
            <div className={styles.container}>
                <Icon className={styles.cat} icon="picon:cat" width="10vw" height="10vw" />
                <h2>На странице произошла техническая ошибка</h2>
                <div className={styles.buttons}>
                    <button onClick={()=>window.location.reload(true)} className={styles.reloadButton}>
                        Перезагрузить
                        <Icon icon="tabler:reload" width="2vw" height="2vw" />
                    </button>
                    <button onClick={()=>window.history.back()} className={styles.backButton}>
                        Пред. страница
                        <Icon icon="pajamas:go-back" width="2vw" height="2vw" />
                    </button>
                </div>
                <button onClick={()=>router.push('/')} className={styles.homeButton}>
                    Домой
                    <Icon icon="mdi:home" width="2vw" height="2vw" />
                </button>
            </div>
            {children}
        </div>
    )
}

export default Broken;