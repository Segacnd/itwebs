"use client"

import { Icon } from '@iconify/react/dist/iconify.js';
import * as styles from './adminVacancies.module.css';
import { useState } from 'react';
import VacancieItemShort from './VacancieItemShort';
import { deleteVacancie } from '@/services/deleteVacancie.service';
import { toast } from 'react-toastify';

const VacancieListItem = ({ name, desc, title, description, image, link, conditions, responsibilities, requirments, style, }) => {
    const [openType, setOpenType] = useState(null);
    const [obj, setObj] = useState({ name, desc, title, link, description, conditions, responsibilities, requirments });
    const handleDelete = () => {
        const token = localStorage.getItem('token');
        deleteVacancie(link,token).then(res=>{
            toast.success(res);
            setTimeout(()=>{
                window.location.reload();
            },1000);
        }).catch(err=>toast.error(err?.message));
    }
    return (
        <>
            {openType && link &&
                <VacancieItemShort obj={obj} setObj={setObj} value={openType} setType={setOpenType} />
            }
            <div className={styles.vacancieListItem} style={style}>
                <div className={styles.vacancieItemName}>{link || 'link'}</div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('name')}>
                    <span>{name || 'name'}</span>
                </div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('desc')}>
                    <span>{desc || 'desc'}</span>
                </div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('title')}>
                    <span>{title || 'title'}</span>
                </div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('description')}>
                    <span>{description || 'description'}</span>
                </div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('conditions')}>
                    <span>{'Условия'}</span>
                </div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('requirments')}>
                    <span>{'Требования'}</span>
                </div>
                <div className={styles.vacancieItemName} onClick={() => setOpenType('responsibilities')}>
                    <span>{'Обязанности'}</span>
                </div>
                {link && <Icon icon={'ic:outline-delete'} className={styles.vacancieItemIcon} onClick={handleDelete} />}
            </div>
        </>
    )
}

export default VacancieListItem;