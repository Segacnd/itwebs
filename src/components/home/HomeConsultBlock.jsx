'use client';
import React, { useState } from 'react';
import * as styles from './homeConsult.module.css';
import { toast } from 'react-toastify';
import { sendConsultRequest } from '@/services/sendConsultRequest.service';
import { useAppSelector } from '@/store/hooks';

const HomeConsultBlock = () => {
    const defaultState = {
        name: '',
        phone: '',
        email: '',
        serviceLink: '',
        comment: ''
    }
    const [inputObj, setInputObj] = useState({...defaultState});
    const {group} = useAppSelector(state=>state.mainReducer.requestGroup);
    const tryToSend = () => {
        if(inputObj.name.length<2)
            return toast.error('Имя должно быть не короче двух символов')
        if(!/[-a-z_.0-9]{4,}\@[a-z]{3,}\.[a-z]{1,10}/i.test(inputObj.email))
            return toast.error('Введите пожалуйста корректную почту!')
        if(inputObj.phone.length<8)
            return toast.error('Пожалуйста введите корректный номер телефона')
        sendConsultRequest({...inputObj,group}).then(res=>{
            toast.success(res);
            setInputObj({...defaultState});
        }).catch(err=>toast.error(err?.message));
    }
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.question}>
                    Не знаете какой сайт<br />вам нужен?
                </div>
                <div className={styles.answer}>
                    Запишитесь на консультацию
                </div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.inputPair}>
                    <label>Имя</label>
                    <input type='text' value={inputObj.name} onChange={(e)=>setInputObj({...inputObj, name:e.target.value})}/>
                </div>
                <div className={styles.inputPair}>
                    <label>Почта</label>
                    <input type='text' value={inputObj.email} onChange={(e)=>setInputObj({...inputObj, email:e.target.value})}/>
                </div>
                <div className={styles.inputPair}>
                    <label>Телефон</label>
                    <input type='text' value={inputObj.phone} onChange={(e)=>setInputObj({...inputObj, phone: '+'+e.target.value.split('').filter(item=>/^[0-9]$/.test(item)).join('')})}/>
                </div>
                <div className={styles.inputPair}>
                    <label>Сообщение</label>
                    <textarea type='text' value={inputObj.comment} onChange={(e)=>setInputObj({...inputObj, comment:e.target.value})}/>
                </div>
                <button onClick={tryToSend} className={styles.senderButton}>
                    Отправить
                </button>
            </div>
        </div>
    )
}

export default HomeConsultBlock;