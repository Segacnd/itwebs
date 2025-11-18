'use server'

import * as styles from './servicesStages.module.css';
import * as globalStyles from '../../../styles/app.module.css';
import AboutBlockHeading from '@/components/about/AboutBlockHeading';


const ServicesStages = async () => {
    const stages = ['Консультация', 'Составление план-проекта', 'Подписание договора на разработку проекта', 'Составление дизайна', 'Утверждение дизайна', 'Frontend-разработка', 'Утверждение frontend-разработки',
        'Backend-разработка', 'Утверждение Backend-разработки', 'Базовая настройка СЕО', 'Деплой проекта на ваш домен', 'Подписание закрывающего договора'
    ]
    return (
        <div className={globalStyles.block}>
            <AboutBlockHeading style={{ marginLeft: '7vw', marginBottom:'3vh', color:'white', maxWidth:'90%'}} text='ЦИКЛ РАЗРАБОТКИ САЙТА / РАБОТА С КЛИЕНТОМ' />
            <div className={styles.stagesContainer}>
                <div className={styles.stagesLeftLine}></div>
                <div className={styles.stagesList}>
                    {stages.map((item, ind) => (
                        <div key={ind} className={styles.stageItem}>
                            <div className={styles.stageNum}>{ind + 1}</div>
                            <div className={styles.stageText}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesStages;