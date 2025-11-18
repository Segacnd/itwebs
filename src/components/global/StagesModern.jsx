'use client'

import * as styles from './globales.module.css';
import * as globalStyles from '../../styles/app.module.css';
import line1 from '../../assets/stage1-line.svg';
import line2 from '../../assets/stage2-line.svg';
import line3 from '../../assets/stage3-line.svg';
import line4 from '../../assets/stage4-line.svg';
import line5 from '../../assets/stage5-line.svg';
import line6 from '../../assets/stage6-line.svg';
import line1Mobile from '../../assets/stage1-line-mobile.svg';
import line2Mobile from '../../assets/stage2-line-mobile.svg';
import line3Mobile from '../../assets/stage3-line-mobile.svg';
import line4Mobile from '../../assets/stage4-line-mobile.svg';
import line5Mobile from '../../assets/stage5-line-mobile.svg';
import line6Mobile from '../../assets/stage6-line-mobile.svg';
import Image from 'next/image';
import Article from './Article';
import { useEffect, useState } from 'react';

const StagesModern = () => {
    const [wind,setWind] = useState(null);
    useEffect(()=>{
        window&&setWind(window);
    },[])
    return (
        <div className={globalStyles.block} style={{maxHeight:'none'}}>
            <Article styles={{ position: 'relative', width: '100vw' }} heading='Этапы разработки сайта' />
            <div className={styles.stagesBlock}>
                <div className={styles.stagesItem} style={{marginBottom:wind&&innerWidth>800?'':'4svh'}}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stagesNum}>1</div>
                        <div className={styles.stageItemTextContent}>
                            <div className={styles.stageItemHead}>Брифинг</div>
                            <div className={styles.stageItemText}>
                                Мы узнаём, что нужно клиенту: цели сайта, аудитория, особенности бизнеса. Это помогает заложить правильный фундамент
                            </div>
                        </div>
                    </div>
                    <div className={styles.stageLineContainer}>
                        <Image src={wind&&wind.innerWidth>800?line1:line1Mobile} className={styles.stageLine} style={{transform:wind && wind.innerWidth>800 ?'':'translateY(3svh) scaleY(1.5) scaleX(1)'}} alt='Брифинг' />
                    </div>
                </div>

                <div className={styles.stagesItem} style={{ justifyContent: 'flex-end' }}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stageItemTextContent} style={{ marginRight: wind && wind.innerWidth>800 ? '1vw':'' }}>
                            <div className={styles.stageItemHead} style={{ textAlign: 'end' }}>Анализ и структура</div>
                            <div className={styles.stageItemText} style={{ textAlign: 'end' }}>
                                Проводим анализ конкурентов и разрабатываем структуру сайта—продумываем, как пользователь будет взаимодействовать с контентом
                            </div>
                        </div>
                        <div className={styles.stagesNum}>2</div>
                    </div>
                </div>
                <div className={styles.stageLineContainer} style={{ alignSelf: 'center', margin: '0' }}>
                    <Image src={wind&&wind.innerWidth>800?line2:line2Mobile} className={styles.stageLine} style={{transform:wind && wind.innerWidth>800 ?'':'scaleX(1.7)'}} alt='Анализ и структура' />
                </div>

                <div className={styles.stagesItem}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stagesNum}>3</div>
                        <div className={styles.stageItemTextContent}>
                            <div className={styles.stageItemHead}>Прототипирование</div>
                            <div className={styles.stageItemText}>
                                Создаём черновую схему будущего сайта — без дизайна, только логика: где будет меню, кнопки, формы и т.д.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.stageLineContainer} style={{ alignSelf: 'center', marginTop: wind && wind.innerWidth>800 ?'-5vh':'', marginBottom: '0' }}>
                    <Image src={wind&&wind.innerWidth>800?line3:line3Mobile} className={styles.stageLine} alt='Прототипирование' style={{transform:wind && wind.innerWidth>800 ?'':'scaleX(1.7)'}} />
                </div>

                <div className={styles.stagesItem} style={{ justifyContent: 'flex-end', marginTop: wind && wind.innerWidth>800 ?'-5vh':'' }}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stageItemTextContent} style={{ marginRight: '1vw' }}>
                            <div className={styles.stageItemHead} style={{ textAlign: 'end' }}>Дизайн</div>
                            <div className={styles.stageItemText} style={{ textAlign: 'end' }}>
                                Разрабатываем визуальную часть: стиль, цвета, шрифты и UI-элементы. Все макеты — адаптивные и современные
                            </div>
                        </div>
                        <div className={styles.stagesNum}>4</div>
                    </div>
                </div>

                <div className={styles.stageLineContainer} style={{ alignSelf: 'center', marginTop: wind && wind.innerWidth>800 ?'-5vh':'', marginBottom: '0' }}>
                    <Image src={wind&&wind.innerWidth>800?line4:line4Mobile} className={styles.stageLine} alt='Дизайн' style={{transform:wind && wind.innerWidth>800 ?'':'scaleX(1.7)'}} />
                </div>

                <div className={styles.stagesItem} style={{ marginTop: '0' }}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stagesNum}>5</div>
                        <div className={styles.stageItemTextContent}>
                            <div className={styles.stageItemHead}>Разработка</div>
                            <div className={styles.stageItemText}>
                                Переводим дизайн в живой код. Настраиваем фронтенд и бэкенд, а также адаптацию под все устройства
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.stageLineContainer} style={{ alignSelf: 'center', marginTop: wind && wind.innerWidth>800 ?'-5vh':'', marginBottom: '0', width:wind && wind.innerWidth>800 ?'':'max-content' }}>
                    <Image src={wind&&wind.innerWidth>800?line5:line5Mobile} className={styles.stageLine} alt='Разработка' style={{ width: wind && wind.innerWidth>800 ?'80vw':'',transform:wind && wind.innerWidth>800 ?'':'scaleX(1.7) translateX(12vw)' }} />
                </div>

                <div className={styles.stagesItem} style={{ justifyContent: 'flex-end', marginTop: '0' }}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stageItemTextContent} style={{ marginRight: '1vw' }}>
                            <div className={styles.stageItemHead} style={{ textAlign: 'end' }}>Тестирование</div>
                            <div className={styles.stageItemText} style={{ textAlign: 'end' }}>
                                Проверяем сайт на ошибки, адаптацию, скорость загрузки и корректную работу всех функций
                            </div>
                        </div>
                        <div className={styles.stagesNum}>6</div>
                    </div>
                </div>

                <div className={styles.stageLineContainer} style={{ alignSelf: 'center', marginTop: wind && wind.innerWidth>800 ?'-5vh':'', marginBottom: '0' }}>
                    <Image src={wind&&wind.innerWidth>800?line6:line6Mobile} className={styles.stageLine} style={{ width: wind && wind.innerWidth>800 ?'80vw':'',transform:wind && wind.innerWidth>800 ?'':'scaleX(1.7)' }} alt='Тестирование' />
                </div>

                <div className={styles.stagesItem} style={{ marginTop: '0' }}>
                    <div className={styles.stageItemContent}>
                        <div className={styles.stagesNum}>7</div>
                        <div className={styles.stageItemTextContent}>
                            <div className={styles.stageItemHead}>Запуск и поддержка</div>
                            <div className={styles.stageItemText}>
                                Публикуем сайт и при необходимости сопровождаем: обновляем, дорабатываем, подключаем аналитику и рекламу
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default StagesModern;