"use client"

import * as styles from './adminVacancies.module.css';
import * as globalStyles from '../../../styles/app.module.css'
import { useEffect, useState } from 'react';
import { editVacancie } from '@/services/editVacancie.service';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react/dist/iconify.js';

const VacancieItemShort = ({ value, obj, setObj, setType }) => {
    let [cur, setCur] = useState(obj[value]);
    useEffect(() => {
        console.log(cur)
    }, [cur])
    const handleEdit = () => {
        let token = localStorage.getItem('token');
        let curObj = { ...obj, token, [value]: cur };
        editVacancie(curObj).then(res => {
            toast.success(res);
            setObj(prev => ({ ...prev, [value]: cur }));
            setType(null);
        }).catch((err) => toast.error(err?.message));
    }
    return (
        <div className={styles.shortChangeComponent} onClick={() => setType(null)}>
            <div className={styles.shortChangeContainer} onClick={(e) => e.stopPropagation()}>
                <h2>Окно изменения значения</h2>
                {Array.isArray(obj[value]) ?
                    <>
                        {
                            cur.map((item, ind) => (
                                <div key={ind+item} className={styles.changeListItem}>
                                    <input type='text' value={cur[ind]} onChange={(e) => setCur(prev => prev.map((it, id) => id == ind ? e.target.value : it))} />
                                    <Icon icon={'ic:outline-delete'} className={styles.vacancieItemIcon} />
                                </div>
                            ))
                        }
                        <div className={styles.modalCreateButtons}>
                            <button onClick={() => setCur(prev => [...prev, ''])}>
                                Добавить элемент
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <input type='text' value={cur} onChange={(e) => setCur(e.target.value)} />
                    </>
                }
                <button onClick={handleEdit} className={styles.editButton}>
                    Сохранить изменения!
                </button>
            </div>
        </div>
    )
}

export default VacancieItemShort;