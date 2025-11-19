'use client'

import { useState } from 'react';
import * as styles from './quiz.module.css';
import { useAppSelector } from '@/store/hooks';
import { Icon } from '@iconify/react';

const QuizCheckbox = ({ text, radioName = 'current', value, dispatch, setCommand, storeValue, removeCommand }) => {
    let state = useAppSelector(state => state.mainReducer.quiz[storeValue]).includes(value);
    const handleChange = () => {
        dispatch({ type: setCommand, payload: value });
    }
    return (
        <div className={styles.quizCheckbox}>
            <Icon onClick={handleChange} icon={'material-symbols:done-rounded'} className={styles.checkboxIcon} style={{ opacity:state?1:0 }} />
            <input id={text} name={radioName} type={'checkbox'} checked={state} onChange={handleChange} />
            <label htmlFor={text}>{text}</label>
        </div>
    )
}

export default QuizCheckbox;