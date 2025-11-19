'use client'
import { useState } from 'react';
import * as adminStyles from './adminComponent.module.css';
import * as styles from './delModer.module.css'
import ModalHeading from '../global/ModalHeading';
import { toast } from 'react-toastify';
import { deleteModer } from '../../services/admin/deleteModer.service';
import Loader from '../global/Loader';

const DeleteModeratorModal = ({setOpen,email}) => {
    const [loading,setLoading] = useState(false);
    const [moderatorEmail,setModeratorEmail] = useState('');
    const token = localStorage.getItem('token');
    const tryToDelete = () => {
        if(moderatorEmail!==email)
            return toast.error('Email не совпадает!')
        deleteModer(token,email).then(res=>{
            setOpen(false);
            setModeratorEmail('');
            toast.success(res);
        }).catch(err=>toast.error(err?.message))
    }
    return(
        <div className={adminStyles.modalComponent}>
        {loading && <Loader/>}
            <form onSubmit={(e)=>{e.preventDefault();tryToDelete()}} className={styles.modalContainer}>
                <ModalHeading text='' color='gray' setOpen={setOpen}/>
                <h2>Окно для подтверждения удаления модератора</h2>
                <h2 style={{margin:0, color:'gray'}}>{email}</h2>
                <h3>Пожалуйсте повторите ввод почты модератора</h3>
                <input type='text' style={{border: moderatorEmail!=''&&moderatorEmail===email?'1px solid green':'1px solid black', boxShadow:moderatorEmail!=''&&moderatorEmail===email?'0 0 1px 2px red':''}} value={moderatorEmail} onChange={(e)=>setModeratorEmail(e.target.value)} />
                <button style={{boxShadow:moderatorEmail!=''&&moderatorEmail==email?'0 0 1px 3px red':'',border:moderatorEmail===email?'1px solid red':'',color:moderatorEmail===email?'red':''}}>Удалить</button>
            </form>
        </div>
    )
}

export default DeleteModeratorModal;