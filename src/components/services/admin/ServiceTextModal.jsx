'use client'
import { useState } from 'react';
import * as styles from '../../../styles/servicesAdmin.module.css';
import Loader from '../../global/Loader';
import ModalHeading from '../../global/ModalHeading';
import ServiceStrModal from './ServiceStrModal';



const ServiceTextModal = ({ type, setOpen, setMain, value, id }) => {
    const [loading, setLoading] = useState(false);
    const [inputText, setInputText] = useState(value);
    const saveChanges = () => {
        setLoading(true);
        editServiceInfo({ id, token, [type]: inputText }).then(res => {
            toast.success(res);
            setMain(prev => ({ ...prev, [type]: inputText}));
            setOpen(null);
        }).catch(err => toast.error(err?.message)).finally(() => setLoading(false));
    }
    return (
        <>
            {loading && <Loader />}
            <div className={styles.modalComponent} onClick={()=>setOpen(null)}>
                <form onSubmit={(e)=>{e.preventDefault();saveChanges()}} className={styles.modalStrContainer} onClick={(e)=>e.stopPropagation()}>
                    <ModalHeading setOpen={setOpen} closeVal={null} text={`Изменить ${type} услуги №${id}`} color='black' />
                    <label>{`Редактируйте ${type} услуги`}</label>
                    <textarea value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                    <button type='submit'>Сохранить!</button>
                </form>
            </div>
        </>

    )
}

export default ServiceTextModal;