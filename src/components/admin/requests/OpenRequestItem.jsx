'use client'
import { useEffect, useState } from 'react';
import * as styles from '../adminComponent.module.css';
import RequestCommentModal from './RequestCommentModal';
import { takeRequest } from '../../../services/admin/takeRequest';
import { toast } from 'react-toastify';
import Loader from '../../global/Loader';

const RequestItem = (props) => {
    const [openComment, setOpenComment] = useState(false);
    const [loading,setLoading] = useState(false)
    let [token,setToken] = useState(null);
    const [answer,setAnswer] = useState(props.answered);
    useEffect(()=>{
        let curToken = localStorage.getItem('token')
        setToken(curToken);
    },[])
    return (
        <>
            {openComment === true && <RequestCommentModal setOpen={setOpenComment} id={props.id} comment={props.comment} />}
            {loading && <Loader/>}
            <div className={styles.requestItem}>
                <div className={styles.requestItemId}>{props.id}</div>
                <div className={styles.requestItemDate}>{props.updated}</div>
                <div className={styles.requestItemName}>{props.name}</div>
                <div className={styles.requestItemMail}>{props.email}</div>
                <div className={styles.requestItemPhone}>{props.phone ? props.phone : 'Не указан'}</div>
                <div className={styles.requestItemService}>{props.service}</div>
                {props.comment==='' ?
                    <div>Отстутствует</div>
                    :
                    props.id!=='ID' &&
                 <button className={styles.requestItemButton} onClick={() => setOpenComment(true)}>Comment</button>}
                {props.updated != 'Создано' && props.updated!='Принят' && !answer && <button onClick={()=>{setLoading(true);takeRequest(token,props.id).then(res=>{
                    toast.success(res);
                    setAnswer(null);
                    window.location.reload();
                }).catch(err=>toast.error('Произошла ошибка на сервере!')).finally(()=>setLoading(false))}} className={styles.requestItemButton}>Ответить</button>}
            </div>
        </>
    )
}

export default RequestItem;