'use client'


import { useEffect, useState } from 'react';
import * as styles from './quiz.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import QuizRadioItem from './QuizRadioItem';
import { toast } from 'react-toastify';
import { Stage, Variant } from '@/utils/quizClasses.service';
import QuizCheckbox from './QuizCheckBox';

const SeoQuiz = ({ setProgress, final }) => {
    const dispatch = useAppDispatch();
    const quizState = useAppSelector(state => state.mainReducer.quiz);
    const stages = [
        {},
        new Stage("На какой срок планируется продвижение", [new Variant('3 месяца (~+1000 пос./мес.)', '3'), new Variant('6 месяцев (~+3000 пос./мес.)', '6'), new Variant('9 месяцев (~+5000 пос./мес.)', '9'), new Variant('12 месяцев (топ-1 позиция в поиске)', '12')], "SET_SEO_TIME", 'seoTime', 'single'),
        new Stage("Какое кол-во страниц вы бы хотели продвигать", [new Variant('1-5 страниц', '1-5'), new Variant('5-10 страниц', '5-10'), new Variant('10-20 страниц', '10-20'), new Variant('20+ страниц', '20+')], "SET_SEO_PAGES", 'seoPages', 'single'),
        new Stage("Какой тип поддержки вам необходим",[new Variant('Полное IT-сопровождение организации','accompaniment'), new Variant('Мониторинг сайта','monitoring'), new Variant('Не нужна','nothing')],"SET_SUPPORT",'support','single'),
        new Stage("Выберите дополнительные услуги", [new Variant('Настройка яндекс-рекламы под ваши услуги/сайт','yandexAdd'),new Variant('Настройка google-рекламы под ваши услуги/сайт','googleAdd'),new Variant('Настройка рекламы в социальныъ сетях','socialAdd'),new Variant('Заполнение бизнес-профиля на всех популярных ресурсах','addProfile')],'SET_SEO_DOPS','seoDops','many')
    ]
    let lastProgress = useAppSelector(state=>state.mainReducer.quiz.lastProgress)
    let curStage = lastProgress>stages.length-1?stages.length-1:lastProgress<0?0:lastProgress;
    const handleNext = () => {
        if (!quizState[stages[curStage].storeValue]) {
            return toast.error('Пожалуйста сделайте выбор прежде чем перейти к следующему вопросу')
        }
        setProgress(prev => prev + 1);
    }
    const backToMain = () => {
        dispatch({ type: "RESET_QUIZ" });
        setProgress(prev => prev - 1);
    }
    
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                {stages[curStage].question}
            </div>
            <div className={styles.variantsList}>
                {
                    stages[curStage].variants &&
                    stages[curStage].type == 'single' ?
                        stages[curStage].variants.map((item, ind) => (
                            <QuizRadioItem key={ind} storeValue={stages[curStage].storeValue} text={item.text} value={item.value} dispatch={dispatch} dispatchCommand={stages[curStage].dispatchCommand} />
                        ))
                        :
                    stages[curStage].variants ?
                        stages[curStage].variants.map((item, ind) => (
                            <QuizCheckbox key={ind} storeValue={stages[curStage].storeValue} text={item.text} value={item.value} dispatch={dispatch} setCommand={stages[curStage].dispatchCommand} removeCommand={stages[curStage].removeCommand} />
                        ))
                        :
                        <>  </>
                }
            </div>
            <div className={styles.buttons}>
                {
                    curStage > 1 &&
                    <button onClick={() => setProgress(prev => prev - 1)}>
                        Вернуться назад
                    </button>
                }
                {
                    curStage == 1 &&
                    <button onClick={backToMain}>
                        Вернуться назад
                    </button>
                }
                {
                    curStage < stages.length - 1 ?
                    <button onClick={handleNext}>
                        Вперед
                    </button>
                    :
                    <button onClick={final}>
                        Вперед
                    </button>
                }


            </div>
        </div>

    )
}

export default SeoQuiz;