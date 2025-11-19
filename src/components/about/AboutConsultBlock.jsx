'use client'
import { useState, useRef } from 'react';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from './AboutBlockHeading';
import * as styles from './about.module.css';
import { sendConsultRequest } from '../../services/sendConsultRequest.service';
import { toast } from 'react-toastify';

const AboutConsultBlock = () => {
    const defaultInputState = {
        name: '',
        email: '',
        comment: ''
    }
    const buttonRef = useRef();
    const [inputObj,setInputObj] = useState({...defaultInputState});
    const [loading,setLoading] = useState(false);
    const tryToSend = (e) =>{
        e.preventDefault();
        setLoading(true);
        for(let key in inputObj){
            if(!inputObj[key]){
                toast.error('Все поля для заявки должны быть заполнены');
                return setLoading(false);
            }
        }
        sendConsultRequest({...inputObj}).then(res=>{
            toast.success(res?.data);
            toast('Ожидайте сообщения менеджера');
        }).catch(err=>{toast.error('К сожалению отправить заявку не получилось')}).finally(()=>{
            setLoading(false);
        })
    }
    return (
        <div className={globalStyles.block} style={{height:'auto'}}>
            <div className={styles.consultBlock}>
                <div className={styles.consultTextBlock}>
                    <div className={styles.consultBlockHeading}>
                        Ваш бизнес заслуживает сайт с характером
                    </div>
                    <div className={styles.consultBlockText}>
                        Запишитесь на консультацию
                    </div>
                </div>
                <form onSubmit={tryToSend} className={styles.consultInputs}>
                    <div className={styles.consultInputPair}>
                        <label>
                            Имя
                        </label>
                        <input type='text' value={inputObj.name} onChange={(e)=>setInputObj(prev=>({...prev,name:e.target.value}))} placeholder='' />
                    </div>
                    <div className={styles.consultInputPair}>
                        <label>
                            Электронная почта
                        </label>
                        <input type='email' value={inputObj.email} onChange={(e)=>setInputObj(prev=>({...prev,email:e.target.value}))} placeholder='' />
                    </div>
                    <div className={styles.consultInputPair}>
                        <label>
                            Ваше сообщение
                        </label>
                        <textarea value={inputObj.comment} onChange={(e)=>setInputObj(prev=>({...prev,comment:e.target.value}))} placeholder='' />
                    </div>
                    <button  ref={buttonRef} className={loading?styles.buttonActive:''} type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default AboutConsultBlock;