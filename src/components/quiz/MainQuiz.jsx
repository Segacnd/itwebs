
import { useState } from 'react';
import * as styles from './quiz.module.css';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const MainQuiz = ({setProgress}) => {
    class Variant {
        constructor(text, value) {
            this.text = text;
            this.value = value
        }
    }
    const dispatch = useAppDispatch();
    const quizState = useAppSelector(state=>state.mainReducer.quiz);
    const variants = [
        new Variant('Продвижение сайта в поисковой выдаче', 'seo'),
        new Variant('Разработка одностраничного сайта визитки', 'landing'),
        new Variant('Разработка многостраничного сайта','many')
    ]
    const [value,setValue] = useState(null);
    const handleNext = () => {
        if(!value){
            return toast.error('Для того, чтобы перейти к следующему вопросу выберите один из вариантов')
        }
        dispatch({type: "SET_SITE_TYPE",payload: value});
        dispatch({type:"SET_QUIZ_TYPE",payload:value});
        setProgress(prev=>prev+1);
    }
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                Что вам нужно разработать
            </div>
            <div className={styles.variantsList}>
                {
                    variants.map(item => (
                        <div key={item.value} className={styles.quizRadioItem}>
                            <input id={item.text} type='radio' name='main' checked={value==item.value} onChange={()=>setValue(item.value)} />
                            <label htmlFor={item.text}>{item.text}</label>
                        </div>
                    ))
                }
            </div>
            <div className={styles.buttons}>
                <button onClick={handleNext}>
                    Далее
                </button>
            </div>
        </div>
    )
}

export default MainQuiz;