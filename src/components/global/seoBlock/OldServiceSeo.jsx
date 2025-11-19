'use server'

import * as styles from './pageSeo.module.css';
import * as globalStyles from '../../../styles/app.module.css';

const OldServiceSeoBlock = async ({ dops, ways }) => {

    return (
        <div className={[globalStyles.block, styles.serviceSeoBlock].join(' ')}>
            <h3 className={styles.serviceSeoHeading}>
                Разработка сайтов и цифровых решений под ключ
            </h3>
            <h4 className={styles.serviceSeoText}>
                В ITs мы создаём не просто сайты — мы создаём инструменты роста для вашего бизнеса. Каждая услуга адаптирована под реальные задачи: от увеличения продаж до укрепления бренда. Мы работаем так, чтобы ваш проект приносил результат с первого дня
            </h4>
            <div className={styles.serviceSeoColumns}>{
                dops.length ?
                    <div className={styles.serviceSeoColumn}>
                        <h3 className={styles.serviceSeoHeading}>
                            Что входит в услугу
                        </h3>
                        {
                            dops.map(item => (
                                <div key={item} className={styles.serviceSeoLine}>
                                    <div className={styles.serviceSeoCircle}></div>
                                    <h4 className={styles.serviceSeoText}>{item}</h4>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <></>
            }
                {
                    ways.length ?
                        <div className={styles.serviceSeoColumn}>
                            <h3 className={styles.serviceSeoHeading}>
                                Для кого подходит
                            </h3>
                            {
                                ways.map(item => (
                                    <div key={item} className={styles.serviceSeoLine}>
                                        <div className={styles.serviceSeoCircle}></div>
                                        <h4 className={styles.serviceSeoText}>{item}</h4>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <></>
                }
            </div>
            <div className={[styles.serviceSeoColumn, styles.serviceWhyUs].join(' ')}>
                <h3 className={styles.serviceSeoHeading}>Почему выбирают Itwebs ? </h3>
                <div className={styles.serviceSeoLine}>
                    <div className={styles.serviceSeoCircle}></div>
                    <h4 className={styles.serviceSeoText}>Мы не делаем шаблоны — только решения с характером</h4>
                </div>
                <div className={styles.serviceSeoLine}>
                    <div className={styles.serviceSeoCircle}></div>
                    <h4 className={styles.serviceSeoText}>Используем проверенные технологии и быстрые решения</h4>
                </div>
            </div>
        </div>
    )
}
export default OldServiceSeoBlock;