'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as styles from './quiz.module.css';
import { useEffect, useState } from 'react';
import Loader from '../global/Loader';
import { calculateQuiz } from '@/utils/calculate.service';
import { toast } from 'react-toastify';
import { sendConsultRequest } from '@/services/sendConsultRequest.service';
import { sendCalculateRequest } from '@/services/sendCalculateRequest';

const QuizFinalPart = ({ setProgress }) => {
    const quiz = useAppSelector(state => state.mainReducer.quiz);
    const dispatch = useAppDispatch()
    const handleBack = () => {
        setProgress(quiz.lastProgress);
        dispatch({ type: "SET_QUIZ_TYPE", payload: quiz.siteType });
    }
    const [price, setPrice] = useState(0);
    const [loading,setLoading] = useState(true);
    const {group} = useAppSelector(state=>state.mainReducer.requestGroup);
    useEffect(() => {
        quiz&&calculateQuiz(quiz).then(res=>{
            setPrice(res);
        }).catch(err=>toast.error(err?.message)).finally(()=>{
            setLoading(false);
        })
    }, []);
    const defaultState = {
        name: '',
        phone: '',
        email: '',
        comment: '',
    }
    const [inputObj,setInputObj] = useState({...defaultState});
    const handleSend = () => {
        for(let key in inputObj){
            if(key!='comment'&&!inputObj[key])
                return toast.error('Все поля в заявке должны быть заполнены!');
        }
        if(!/^[a-z.0-9_]+\@[a-z0-9]+\.[a-z]+$/i.test(inputObj.email)){
            return toast.error('Пожалуйста укажите корректный email');
        }

        const curObj = {
            user: {...inputObj},
            data: {...quiz, price, group},
        }
        sendCalculateRequest(curObj).then(res=>{
            toast.success(res);
            dispatch({type:"SET_DONE"});
        }).catch(err=>{
            console.log(err);
            toast.error(err?.message);
        })
    }
    return (
        <>
            {loading && <Loader />}
            <div className={[styles.content, styles.finalContent].join(' ')}>
                <div className={styles.finalTitle}>
                    ВАША ПРОГНОЗИРУЕМАЯ ЦЕНА
                </div>
                <div className={styles.finalPrice}>
                    {price} BYN {quiz.siteType=='seo'&& '/ мес'}
                </div>
                <div className={styles.finalDesc}>
                    Для получения подробностей/заказа услуги пожалуйста оставьте ваши данные в предложенной форме
                </div>
                <div className={styles.finalInputs}>
                    <div className={styles.finalInputPair}>
                        <label>Имя</label>
                        <input placeholder='Имя' type='text' value={inputObj.name} onChange={(e)=>setInputObj(prev=>({...prev,name:e.target.value}))} />
                    </div>
                    <div className={styles.finalInputPair}>
                        <label>Телефон</label>
                        <input placeholder='Телефон' type='text' value={inputObj.phone} onChange={(e)=>setInputObj(prev=>({...prev,phone:'+'+e.target.value.split('').filter(item=>/^[0-9]$/.test(item)).join('')}))} />
                    </div>
                    <div className={styles.finalInputPair}>
                        <label>Почта</label>
                        <input placeholder='Почта' type='text' value={inputObj.email} onChange={(e)=>setInputObj(prev=>({...prev,email:e.target.value}))} />
                    </div>
                    <div className={styles.finalInputPair}>
                        <label>Комментарий</label>
                        <textarea placeholder='Комментарий' value={inputObj.comment} onChange={(e)=>setInputObj(prev=>({...prev,comment:e.target.value}))} />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleBack}>
                        Назад
                    </button>
                    <button onClick={handleSend}>
                        Отправить
                    </button>
                </div>
            </div>
        </>
    )
}

export default QuizFinalPart;