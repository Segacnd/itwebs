'use client'

import { useEffect, useState } from 'react';
import * as styles from './quiz.module.css';
import QuizContainer from './QuizContainer';
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const QuizBanner = ({group}) => {
    const [enter, setEnter] = useState(false);
    const quizState = useAppSelector(state => state.mainReducer.quiz.done);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(enter==true){
            dispatch({type:"RESET_QUIZ"});
        }
        if(group){
            dispatch({type:`SET_${group.toUpperCase()}_GROUP`});
        }
    },[enter]);
    return (
        <>
            <div className={styles.block}>

                {!quizState ? enter ?
                    <QuizContainer setStatus={setEnter} />
                    :
                    <div className={styles.bannerContainer}>
                        <h2 className={styles.bannerTitle}>
                            Решили, что вашему бизнесу
                            нужен сайт? <br/><br/>Сделаем с гарантией
                            и без нервов
                        </h2>
                        <h3 className={styles.bannerDesc}>
                            Пройдите тест из 9 вопросов и узнайте стоимость вашего сайта
                        </h3>
                        <button onClick={() => setEnter(true)} className={styles.bannerButton}>
                            <Icon color='white' className={styles.bannerButtonIcon} icon={'weui:done-filled'} />
                            Пройти
                        </button>
                    </div>
                    :
                    <div className={styles.container}>
                        <div className={styles.doneContainer}>
                            <h5>Вы успешно оставили заявку</h5>
                            <h6>В ближайшее время с вами свяжется наш сотрудник для консультации</h6>
                            <p>Спасибо что выбрали нас!</p>
                        </div>
                    </div>
                }
                <div className={styles.backImage}>

                </div>
                <div className={styles.backGradient}>
                    
                </div>
            </div>
        </>
    )
}

export default QuizBanner;