'use client'
import { useState } from 'react';
import * as styles from '../../../styles/servicesAdmin.module.css';
import ModalHeading from '../../global/ModalHeading';
import Loader from '../../global/Loader';
import { editServiceInfo } from '../../../services/services/editServiceInfo';
import { toast } from 'react-toastify';

const ServiceStrModal = ({ type, setMain, setOpen, value, id }) => {
    const [inputTxt, setInputTxt] = useState(value);
    const [loading,setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const saveChanges = () => {
        setLoading(true);
        editServiceInfo({id,token,[type]:inputTxt}).then(res=>{
            toast.success(res);
            setMain(prev=>({...prev,[type]:inputTxt}));
            setOpen(null);
        }).catch(err=>toast.error(err?.message)).finally(()=>setLoading(false));
    }
    return (
        <>
            {loading&&<Loader/>}
            <div className={styles.modalComponent} onClick={() => setOpen(null)}>
                <form onSubmit={(e)=>{e.preventDefault();saveChanges()}} className={styles.modalStrContainer} onClick={(e) => e.stopPropagation()}>
                    <ModalHeading mt='5svh' setOpen={setOpen} closeVal={null} text={`Изменение ${type} услуги №${id}`} color='black' />
                    <label>Измените {type} услуги</label>
                    <input type='text' value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} />
                    <button type='submit'>Сохранить</button>
                </form>
            </div>
        </>

    )
}

export default ServiceStrModal;