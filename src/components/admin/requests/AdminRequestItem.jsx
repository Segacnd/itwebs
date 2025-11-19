'use client'

import { toast } from 'react-toastify';
import * as styles from '../adminComponent.module.css';
import { removeManager } from '../../../services/admin/removeManager.service';

const AdminRequestItem = ({ name, email, phone, service, comment, manager, answered, id, updated }) => {
    const token = localStorage.getItem('token');
    const tryRemoveManager = () => {
        if(!manager&&!answered){
            return toast.error(`This request does't have manager!`)
        }
        else{
            removeManager(token,id).then(res=>{
                toast.success(res);
                answered=false;
            }).catch(err=>toast.error(err?.message));
        }
    }
    return (
        <>
            <div className={styles.requestAdminItem}>
                <div className={styles.requestItemId}>{id}</div>
                <div className={styles.requestItemUpdated}>{updated}</div>
                <div className={styles.requestItemName}>{name}</div>
                <div className={styles.requestItemEmail}>{email}</div>
                <div className={styles.requestItemPhone}>{phone ? phone : 'Не указан'}</div>
                <div className={styles.requestItemService}>{service}</div>
                {comment?<button className={styles.requestItemButton}>Comment</button>:<div>No comment</div>}
                <div onClick={tryRemoveManager} className={styles.requestItemManager}>{answered?manager?manager:'Отвечен':'Не принят!'}</div>
            </div>
        </>
    )
}

export default AdminRequestItem;