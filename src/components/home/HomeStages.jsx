'use server'
import Article from '../global/Article';
import HomeStageItem from './HomeStageItem';
import * as styles from './stages.module.css';
import * as motion from 'motion/react-client';
import {loadStages} from '../../services/loadStages.service'

const HomeStages = async () => {
    const defaultStages = [
        { name: 'Брифинг', id: 1, text: 'Мы узнаём, что нужно клиенту: цели сайта, аудитория, особенности бизнеса. Это помогает заложить правильный фундамент' },
        { name: 'Анализ и структура', id: 2, text: 'Проводим анализ конкурентов и разрабатываем структуру сайта — продумываем, как пользователь будет взаимодействовать с контентом' },
        { name: 'Прототипирование', id: 3, text: 'Создаём черновую схему будущего сайта — без дизайна, только логика: где будет меню, кнопки, формы и т.д.' },
        { name: 'Дизайн', id: 4, text: 'Разрабатываем визуальную часть: стиль, цвета, шрифты и UI-элементы. Все макеты — адаптивные и современные' },
        { name: 'Разработка', id: 5, text: 'Разрабатываем визуальную часть: стиль, цвета, шрифты и UI-элементы. Все макеты — адаптивные и современные' },
        { name: 'Тестирование', id: 6, text: 'Разрабатываем визуальную часть: стиль, цвета, шрифты и UI-элементы. Все макеты — адаптивные и современные' },
        { name: 'Запуск и поддержка', id: 7, text: 'Разрабатываем визуальную часть: стиль, цвета, шрифты и UI-элементы. Все макеты — адаптивные и современные' }

    ];
    let stages = await loadStages();
    if(stages===null)
        stages=[...defaultStages]
    
    return (
        <>
            <div className={styles.block}>
                <Article style={{paddingTop:'1vw'}} heading='полный цикл разработки сайтов' />
                <motion.div
                    transition={{ duration: 1, ease: 'easeOut' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.4 }}
                    className={styles.stagesContainer} style={{ animation: 'none' }}>
                    <div className={styles.stagesContainerFirstLine}>
                        {stages.filter(item => item.id % 2 == 1).map(item => (
                            <HomeStageItem key={item.id} num={item.id} name={item.name} desc={item.text} />
                        ))}
                    </div>
                    <div className={styles.stagesContainerSecondLine}>
                        {stages.filter(item => item.id % 2 == 0).map(item => (
                            <HomeStageItem key={item.id} num={item.id} name={item.name} desc={item.text} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default HomeStages