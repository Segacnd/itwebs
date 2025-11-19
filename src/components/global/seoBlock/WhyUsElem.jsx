'use server'
import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './pageSeo.module.css';



const WhyUsElem = async () => {
    const arr = ['Скорость и качество — запускаем проекты за короткие сроки', 'Дизайн с характером — дерзкий, яркий, запоминающийся',
        'Полный цикл — дизайн, разработка, SEO, интеграции', 'Поддержка — мы не исчезаем после сдачи проекта'
    ]
    return (
        <div className={styles.whyUsElem}>
            <div className={styles.whyUsHeading}>
                Почему мы ?
            </div>
            {
                arr.map(item => (
                    <div className={styles.whyUsItem} key={item}>
                        <div className={styles.whyUsIconContainer}>
                            <Icon icon="radix-icons:dot-filled" className={styles.whyUsIcon} color='#007CF8' />
                        </div>
                        <div className={styles.whyUsItemText}>{item}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default WhyUsElem;