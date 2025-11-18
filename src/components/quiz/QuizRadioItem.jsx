'use client'

import { useState } from 'react';
import * as styles from './quiz.module.css';
import { useAppSelector } from '@/store/hooks';


const QuizRadioItem = ({text,radioName,value,dispatch,dispatchCommand,storeValue}) => {
    const state = useAppSelector(state=>state.mainReducer.quiz[storeValue])==value;
    const handleChange = () => {
        dispatch({type:dispatchCommand,payload:value})
    }
    return(
        <div className={styles.quizRadioItem}>
            <input id={text} name={radioName} type={'radio'} checked={state} onChange={handleChange} />
            <label htmlFor={text}>{text}</label>
        </div>
    )
}

export default QuizRadioItem;