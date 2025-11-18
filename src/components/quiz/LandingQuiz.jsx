


import { useEffect, useState } from 'react';
import * as styles from './quiz.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import QuizRadioItem from './QuizRadioItem';
import { toast } from 'react-toastify';
import { Stage, Variant } from '@/utils/quizClasses.service';
import QuizCheckbox from './QuizCheckBox';

const LandingQuiz = ({ setProgress,final }) => {
    const dispatch = useAppDispatch();
    const quizState = useAppSelector(state => state.mainReducer.quiz);
    const stages = [
        {},
        new Stage("Какие функции вы бы хотели иметь дополнительно на сайте", [new Variant('Админ-панель','apanel'),new Variant('Платежная система','payments'),new Variant('Пользовательская система','users'), new Variant('Другое','others')],'SET_FUNC','funcs','many','REMOVE_FUNC'),
        new Stage("Какой вам нужен дизайн", [new Variant('Шаблонный', 'shablon'), new Variant('Уникальный', 'unique'), new Variant('Премиум', 'premium')], "SET_DESIGN", 'design','single'),
        new Stage("Какое кол-во блоков вы бы хотели", [new Variant('До 10 блоков', '10'), new Variant('10-20 блоков', '10-20'), new Variant('20-30 блоков', '20-30'), new Variant('30+ блоков', '30+')], "SET_BLOCKS", 'blocks','single'),
        new Stage("Насколько срочно вам необходим сайт",[new Variant('Стандарт','standart'), new Variant('Срочный','fast'), new Variant('Длительный процесс разработки всех процессов','long')],"SET_DEADLINE",'deadline','single'),
    ]
    let state = useAppSelector(state=>state.mainReducer.quiz.lastProgress);
    let curStage=state>stages.length-1?stages.length-1:state<0?1:state;
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
                {stages[curStage]&&stages[curStage].question}
            </div>
            <div className={styles.variantsList}>
                {
                    stages[curStage]?.variants&&
                    stages[curStage].type == 'single' ?
                    stages[curStage].variants.map((item, ind) => (
                        <QuizRadioItem key={ind} storeValue={stages[curStage].storeValue} text={item.text} value={item.value} dispatch={dispatch} dispatchCommand={stages[curStage].dispatchCommand} />
                    ))
                    :
                    stages[curStage]?.variants?
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
                        Назад
                    </button>
                }
                {
                    curStage == 1 &&
                    <button onClick={backToMain}>
                        Назад
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

export default LandingQuiz