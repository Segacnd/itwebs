'use client'

import { Icon } from '@iconify/react';
import * as styles from './quiz.module.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import MainQuiz from './MainQuiz';
import SeoQuiz from './SeoQuiz';
import LandingQuiz from './LandingQuiz';
import ManyQuiz from './ManyQuiz';
import QuizFinalPart from './QuizFinalPart';

const QuizContainer = ({setStatus}) => {
    const quizState = useAppSelector(state => state.mainReducer.quiz);
    const dispatch = useAppDispatch();

    const [progress, setProgress] = useState(0);

    const final = () => {
        dispatch({ type: "SET_QUIZ_TYPE", payload: 'final' });
        setProgress(10);
    }

    const variants = {
        main: <MainQuiz final={final} setProgress={setProgress} />,
        landing: <LandingQuiz final={final} setProgress={setProgress} />,
        seo: <SeoQuiz final={final} setProgress={setProgress} />,
        many: <ManyQuiz final={final} setProgress={setProgress} />,
        final: <QuizFinalPart setProgress={setProgress} />
    }

    useEffect(() => {
        progress != 10 && dispatch({ type: "SET_LAST_PROGRESS", payload: progress });
    }, [progress]);

    return (
        <>
            {!quizState.done?
                <div className={styles.container} >
                    <div className={styles.containerHeading}>
                        <div className={styles.progressBar} >
                            <div className={styles.progressLine} style={{ width: (progress * 10 + '%') }}>
                            </div>
                        </div>
                        <Icon onClick={() => { setStatus(false); dispatch({ type: "RESET_QUIZ" }) }} icon={'line-md:close'} className={styles.closeIcon} />
                    </div>
                    {quizState.quizType != 'final' && <div className={styles.questionNum}>{progress + 1} вопрос</div>}
                    <>
                        {variants[quizState.quizType]}
                    </>
                </div>
                :
                <>
                </>
            }
        </>

    )
}

export default QuizContainer;