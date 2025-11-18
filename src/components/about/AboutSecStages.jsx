'use server'
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from './AboutBlockHeading';
import * as styles from './about.module.css';
import { loadStages } from '../../services/loadStages.service';
import AboutStageItem from './AboutStageItem';
import { text } from 'motion/react-client';
import * as motion from 'motion/react-client';
import StagesContainer from './StagesContainer.jsx'

const AboutSecStages = async () => {
    const defaultStages = [
        { name: 'Брифинг', id: 1, text: 'Мы узнаём, что нужно клиенту: цели сайта, аудитория, особенности бизнеса. Это помогает заложить правильный фундамент' },
        { name: 'Анализ и структура', id: 2, text: 'Изучаем конкурентов и строим структуру сайта, которая помогает пользователям быстрее становиться вашими клиентами.' },
        { name: 'Прототипирование', id: 3, text: 'Создаём черновик сайта — только логика: где будут меню, кнопки и формы. Так всё станет понятнее до начала работы.' },
        { name: 'Дизайн', id: 4, text: 'Создаем современный адаптивный дизайн: подбираем стиль, цвета, шрифты. Ваш сайт будет удобным на всех устройствах.' },
        { name: 'Разработка', id: 5, text: 'Превращаем дизайн в работающий сайт, чтобы каждая кнопка вела куда нужно, а формы отправлялись без сбоев.' },
        { name: 'Тестирование', id: 6, text: 'Тестируем сайт, чтобы вы получили готовый продукт без ошибок и не потеряли клиентов из-за технических сбоев.' },
        { name: 'Запуск и поддержка', id: 7, text: 'Запускаем и поддерживаем сайт: обновляем, подключаем аналитику и рекламу для роста вашего бизнеса.' }

    ];
    let stages = await loadStages();
    if (!stages) {
        stages = [...defaultStages];
    }
    return (
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Этапы работы'} style={{ alignSelf: 'flex-start', paddingLeft: '5vw' }} />
            <StagesContainer stages={stages} />
            {/* <div
            className={styles.aboutSecStagesContainer}>
                <div className={[styles.aboutSecStagesLine]}>
                    {stages.slice(0,4).map((item, ind) => (
                        <AboutStageItem key={ind + 1} name={item.name} text={item.text} num={item.id} />
                    ))}
                </div>
                <div className={[styles.aboutSecStagesLine]}>
                    {stages.slice(4,8).map((item, ind) => (
                        <AboutStageItem key={ind + 1} name={item.name} text={item.text} num={item.id} />
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default AboutSecStages