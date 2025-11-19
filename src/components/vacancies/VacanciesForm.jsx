'use client'

import { useState } from 'react';
import * as globalStyles from '../../styles/app.module.css'
import * as styles from './vacancies.module.css';
import { Lavishly_Yours } from 'next/font/google';
import { Icon } from '@iconify/react';
import { sendVacant } from '@/services/sendVacant.service';
import { toast } from 'react-toastify';
import Image from 'next/image';

const VacanciesForm = () => {
    const defaultState = {
        name: '',
        surname: '',
        country: '',
        phone: '',
        email: '',
        telegram: '',
        comment: '',
        file: null,
    }
    let formData = new FormData;
    const [inputObj, setInputObj] = useState({
        ...defaultState
    })
    const errors = {
        name: 'Имя пользователя должно быть заполнено обязательно',
        email: 'Пожалуйста укажите корректный email',
        telegram: 'Никнейм в телеграм не указан!',
        phone: 'Обязательно укажите ваш номер телефона'
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let checks = 'name email telegram phone'.split(' ');
        for (let key of checks) {
            if (!inputObj[key] && key!=file) {
                return toast.error(errors[key]);
            }
        }
        if(!/^[a-z.0-9_]+\@[a-z0-9]+\.[a-z]+$/i.test(inputObj.email))
            return toast.error('Пожалуйста введите корректную почту либо свяжитесь с нами через соц. сети')
        for (let key in inputObj) {
            formData.append(key, inputObj[key]);
        }
        sendVacant(formData).then(res => {
            toast.success('Ваш отклик был успешно отправлен');
            setInputObj({...defaultState});
            formData=new FormData();
        }).catch(err => toast.error(err?.message));
    }
    return (
        <div className={styles.formBlock}>
            <h3 className={styles.formHeading}>Оставьте своё резюме и мы свяжемся с вами</h3>
            <form onSubmit={handleSubmit} className={styles.vacancieForm}>
                <div className={styles.formLinePair}>
                    <div className={styles.formNameInput}>
                        <label className={styles.formLabel}>Имя *</label>
                        <input type='text' value={inputObj.name} onChange={(e) => setInputObj(prev => ({ ...prev, name: e.target.value }))} />
                    </div>
                    <div className={styles.formNameInput}>
                        <label className={styles.formLabel}>Фамилия</label>
                        <input type='text' value={inputObj.surname} onChange={(e) => setInputObj(prev => ({ ...prev, surname: e.target.value }))} />
                    </div>
                </div>
                <div className={styles.formLinePair}>
                    <div className={styles.formNameInput}>
                        <label className={styles.formLabel}>Страна</label>
                        <input type='text' value={inputObj.country} onChange={(e) => setInputObj(prev => ({ ...prev, country: e.target.value }))} />
                    </div>
                    <div className={styles.formNameInput}>
                        <label className={styles.formLabel}>Номер телефона *</label>
                        <input type='text' value={inputObj.phone} onChange={(e) => setInputObj(prev => ({ ...prev, phone: '+' + e.target.value.split('').filter(item=>/[0-9]/.test(item)).join('')}))} />
                    </div>
                </div>
                <div className={styles.formLineInput}>
                    <label className={styles.formLabel}>Почтовый адрес *</label>
                    <input type='text' value={inputObj.email} onChange={(e) => setInputObj(prev => ({ ...prev, email: e.target.value }))} />
                </div>
                <div className={styles.formLineInput}>
                    <label className={styles.formLabel}>Имя пользователя в телеграмм *</label>
                    <input type='text' value={inputObj.telegram} onChange={(e) => setInputObj(prev => ({ ...prev, telegram: '@'+e.target.value.split('').filter(item=>item!='@').join('') }))} />
                </div>
                <div className={styles.formFileArea}>
                    {
                        inputObj.file ?
                            <div style={{width: '100%', height:'100%', cursor: 'copy'}} title='Удалить' onClick={()=>setInputObj(prev=>({...prev,file:null}))}>
                                Вы прикрепили файл {inputObj.file.name} 
                            </div>
                            :
                            <>
                                <div>
                                    <Icon className={styles.formFileIcon} icon={'material-symbols-light:docs-outline-rounded'} />
                                    <p>Прикрепите сюда ваши файлы</p>
                                </div>
                                <input type={'file'} className={styles.formFile} onChange={(e) => setInputObj((prev)=>({...prev,file:e.target.files[0]}))} />
                            </>
                    }

                </div>
                <div className={styles.formLineInput}>
                    <label className={styles.formLabel}>Комментарий</label>
                    <textarea type='text' value={inputObj.comment} onChange={(e) => setInputObj(prev => ({ ...prev, comment: e.target.value }))} />
                </div>
                <button className={styles.formButton} type='submit'>Отправить</button>
            </form>
            <br />
        </div>
    )
}

export default VacanciesForm;