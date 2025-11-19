'use client'

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as styles from '../../../styles/servicesAdmin.module.css';
import { createMetaService } from "../../../services/services/createMetaService.service";
import ModalHeading from '../../global/ModalHeading';


const MetaServiceModal = (props) => {
    const defaultState = {
        name: '',
        title: '',
        description:'',
        image:'',
    }
    const [inputObj, setInputObj] = useState({...defaultState});
    useEffect(()=>{
        if(!props.name){
            toast.error('Выберите корректную услугу для создания');
            props.setOpenThis(false);
        }
        setInputObj(prev=>({...prev,name:props.name}));
    },[])

    // /^htt(p|ps)\:\/\/[a-z]+\.[a-z]+\/[a-z]/.test(e.target.value)}

    const sentData = async (e) => {
        e.preventDefault();
        let curToken = localStorage.getItem('token');
        try{
            const response = await createMetaService({...inputObj,token:curToken});
            props.createService();
            toast.success(response);
            props.setOpenThis(false);
        }catch(err){
            toast.error(err.response?err.response.data?.message:err?.message);
        }
    }

    return(
        <div className={styles.metaComponent}>
            <form onSubmit={sentData} className={styles.metaContainer}>
                <ModalHeading text='Укажите мета данные' setOpen={setOpenThis} />
                <div className={styles.metaInputs}>
                    <div className={styles.metaInputPair}>
                        <label>Укажите meta-title</label>
                        <input type="text" value={inputObj.title} onChange={(e)=>e.target.value.length<=60&&setInputObj(prev=>({...prev,title:e.target.value}))} />
                    </div>
                    <div className={styles.metaInputPair}>
                        <label>Укажите meta-description</label>
                        <input type="text" value={inputObj.description} onChange={(e)=>e.target.value.length<=160&&setInputObj(prev=>({...prev,description:e.target.value}))} />
                    </div>
                    <div className={styles.metaInputPair}>
                        <label>Введите ссылку на изображение</label>
                        <input type="text" value={inputObj.image} onChange={(e)=>setInputObj(prev=>({...prev,image:e.target.value}))} />
                    </div>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default MetaServiceModal;