


import { useEffect, useState } from 'react';
import * as styles from './quiz.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import QuizRadioItem from './QuizRadioItem';
import { toast } from 'react-toastify';
import { Stage,Variant } from '@/utils/quizClasses.service';
import QuizCheckbox from './QuizCheckBox';

const ManyQuiz = ({ setProgress, final }) => {
    
    const dispatch = useAppDispatch();
    const quizState = useAppSelector(state=>state.mainReducer.quiz);
    const stages = [
        {},
        new Stage("Какой тип сайта вам нужен",[new Variant('Интернет-магазин','ecommerce'), new Variant('Корпоративный сайт','corporate'), new Variant('Портал','portal')],"SET_MANY_SITE_TYPE",'manySiteType','single'),
        new Stage("Какой вам нужен дизайн",[new Variant('Шаблонный','shablon'), new Variant('Уникальный','unique'), new Variant('Премиум','premium')],"SET_DESIGN",'design','single'),
        new Stage("Какое кол-во страниц вы бы хотели",[new Variant('5-10','5-10'), new Variant('10-20','10-20'), new Variant('20-30','20-30'), new Variant('30+','30+')],"SET_PAGES_COUNT",'pages','single'),
        new Stage("Какие функции вы бы хотели иметь дополнительно на сайте", [new Variant('Админ-панель','apanel'),new Variant('Платежная система','payments'),new Variant('Пользовательская система','users'), new Variant('Другое','others')],'SET_FUNC','funcs','many','REMOVE_FUNC'),
        new Stage("Насколько срочно вам необходим сайт",[new Variant('Стандарт','standart'), new Variant('Срочный','fast'), new Variant('Длительный процесс разработки всех процессов','long')],"SET_DEADLINE",'deadline','single'),
        new Stage("Какой тип поддержки вам необходим",[new Variant('Мониторинг сайта','monitoring'), new Variant('Оптимизация сайта для поисковых роботов','optimize'), new Variant('Полное IT-сопровождение организации','accompaniment'), new Variant('Не нужна','nothing')],"SET_SUPPORT",'support','single'),
    ]
    let lastProgress = useAppSelector(state=>state.mainReducer.quiz.lastProgress)
    let curStage = lastProgress>stages.length-1?stages.length-1:lastProgress<0?0:lastProgress;
    const handleNext = () => {
        if(!quizState[stages[curStage].storeValue]){
            return toast.error('Пожалуйста сделайте выбор прежде чем перейти к следующему вопросу')
        }
        setProgress(prev=>prev+1);
    }
    const backToMain = () => {
        dispatch({type: "RESET_QUIZ"});
        setProgress(prev=>prev-1);
    }
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                {stages[curStage].question}
            </div>
            <div className={styles.variantsList}>
                {
                    stages[curStage].variants&&
                    stages[curStage].type == 'single' ?
                    stages[curStage].variants.map((item, ind) => (
                        <QuizRadioItem key={ind} storeValue={stages[curStage].storeValue} text={item.text} value={item.value} dispatch={dispatch} dispatchCommand={stages[curStage].dispatchCommand} />
                    ))
                    :
                    stages[curStage].variants?
                    stages[curStage].variants.map((item,ind)=>(
                        <QuizCheckbox key={ind} storeValue={stages[curStage].storeValue} text={item.text} value={item.value} dispatch={dispatch} setCommand={stages[curStage].dispatchCommand} removeCommand={stages[curStage].removeCommand} />
                    ))
                    :
                    <></>
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
                    curStage==1&&
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

export default ManyQuiz