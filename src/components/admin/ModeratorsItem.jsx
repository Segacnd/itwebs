'use client'
import { useState } from 'react';
import * as styles from './adminComponent.module.css';
import DeleteModeratorModal from './DeleteModeratorModal';

const ModeratorsItem = ({ id, username, email, requests, lastActive }) => {
    const [openModal,setOpenModal] = useState(false);
    return (
        <>
            {openModal&&<DeleteModeratorModal email={email} setOpen={setOpenModal} />}
            <div className={styles.moderatorsItem}>
                <div className={styles.moderatorId}>{id}</div>
                <div className={styles.moderatorLastActive}>{lastActive}</div>
                <div className={styles.moderatorName}>{username}</div>
                <div className={styles.moderatorMail}>{email}</div>
                <div className={styles.moderatorReqs}>{requests}</div>
                <div><button onClick={()=>setOpenModal(true)} className={styles.moderatorDelete}>Удалить</button></div>
            </div>
        </>
    )
}

export default ModeratorsItem;