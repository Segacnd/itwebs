'use client'

import { useEffect, useReducer, useRef, useState } from 'react';
import * as globalStyles from '../../../styles/app.module.css'
import * as styles from './detailButtons.module.css';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import { sendServiceRequest } from '@/services/sendServiceRequest.service';
import { useAppSelector } from '@/store/hooks';

const DetailButtonsPair = ({serviceLink}) => {
    const [openConsult, setOpenConsult] = useState(false);
    const [openRequest, setOpenRequest] = useState(false);
    const [agreement, setAgreement] = useState(false);
    const {group} = useAppSelector(state=>state.mainReducer.requestGroup);
    const modalComponent = useRef();
    const defaultState = {
        name: '',
        phone: '',
        email: '',
        comment: '',
        group
    }
    const [inputObj, setInputObj] = useState({ ...defaultState });
    const [error,setError] = useState(null)

    const openModal = (type) => {
        if (type == 'request') {
            setOpenRequest(true);
        } else if (type == 'consult') {
            setOpenConsult(true);
        } else {
            return toast.error('Не верный тип модального окна');
        }
        setTimeout(() => {
            modalComponent.current.style.opacity = 1
        }, 100)
    }

    const errors = {
        name: 'Вы не указали имя в заявке',
        phone: 'Номер телефона не должен быть пустым',
        email: 'Пожалуйста, укажите вашу почту',
        agreement: 'Вы не приняли соглашение на обработку данных'
    }

    const closeModal = () => {
        modalComponent.current.style.opacity = 0;
        setTimeout(() => {
            setOpenConsult(false);
            setOpenRequest(false);
            setInputObj({ ...defaultState });
        }, 1000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const musts = 'name phone email'.split(' ');
        for(let item of musts){
            if(!inputObj[item]){
                setError(item);
                return toast.error(errors[item]);
            }
        }
        if(!agreement){
            setError('agreement')
            return toast.error(errors.agreement);
        }
        if(!/^[a-z.0-9\-]+\@[a-z.0-9]+\.[a-z.0-9]+$/i.test(inputObj.email)){
            return toast.error('Пожалуйста, укажите корректную почту!');
        }
        sendServiceRequest({...inputObj,group,serviceLink:serviceLink&&openRequest?serviceLink:'Консультация'}).then(res=>{
            toast.success(res);
            closeModal();
        }).catch(err=>toast.error(err?.message));
    }

    return (
        <>
            {(openConsult || openRequest) &&
                <div className={styles.modalComponent} onClick={closeModal}>
                    <form onSubmit={handleSubmit} ref={modalComponent} className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeading}>
                            <p>Ваша заявка</p>
                            <Icon className={styles.closeIcon} onClick={closeModal} icon={'line-md:close'} />
                        </div>
                        <div className={styles.modalInputs}>
                            <div className={styles.modalInputPair}>
                                <label>Имя</label>
                                <input style={{boxShadow: error=='name'?'0 0 2px 1px red':''}} value={inputObj.name} onChange={(e) => { setInputObj(prev => ({ ...prev, name: e.target.value })); error&&setError(null)}} type='text' />
                            </div>
                            <div className={styles.modalInputPair}>
                                <label>Номер телефона</label>
                                <input style={{boxShadow: error=='phone'?'0 0 2px 1px red':''}} value={inputObj.phone} onChange={(e) => { setInputObj(prev => ({ ...prev, phone: '+'+e.target.value.split('').filter(item=>'1234567890'.includes(item)).slice(0,15).join('') })); error&&setError(null)}} type='text' />
                            </div>
                            <div className={styles.modalInputPair}>
                                <label>Почта</label>
                                <input style={{boxShadow: error=='email'?'0 0 2px 1px red':''}} value={inputObj.email} onChange={(e) => { setInputObj(prev => ({ ...prev, email: e.target.value })); error&&setError(null)}} type='text' />
                            </div>
                            <div className={styles.modalInputPair}>
                                <label>Комментарий</label>
                                <textarea rows={3} value={inputObj.comment} onChange={(e) => setInputObj(prev => ({ ...prev, comment: e.target.value }))} />
                            </div>
                            <div className={styles.modalPoliticyLine}>
                                <Icon onClick={()=>setAgreement(prev=>!prev)} icon={'ic:round-done'} style={{ opacity: agreement ? 1 : 0, scale: agreement?1:0 }} className={styles.checkboxIcon} />

                                <input style={{boxShadow: error=='agreement'?'0 0 2px 1px red':''}} type={'checkbox'} checked={agreement} onChange={() => { setAgreement(prev => !prev); error&&setError(null)}}>
                                </input>

                                <label>Даю согласие на обработку моих персональных данных</label>
                            </div>
                            <button type='submit' className={styles.modalSendButton}>
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            }
            <div className={styles.buttonsContainer}>
                <button onClick={() => openModal('consult')} className={styles.buttonItem}>
                    заказать консультацию
                </button>
                <button onClick={() => openModal('request')} className={styles.buttonItem}>
                    заказать услугу
                </button>
            </div>
        </>
    )
}

export default DetailButtonsPair;