'use client'

import { useEffect, useState } from 'react';
import * as styles from './hr.module.css';
import { loadRequestsByVacancie } from '@/services/admin/loadRequestsByVacancie.service';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { deleteVacRequest } from '@/services/deleteVacRequest.service';
import HrListItem from './HrListItem';

const HrListBlock = ({ vacancieLink }) => {
    const [requests, setRequests] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openInd, setOpenInd] = useState(null);
    useEffect(() => {
        let token = localStorage.getItem('token');
        loadRequestsByVacancie(vacancieLink, token).then(res => {
            console.log(res)
            setRequests(Array.isArray(res) ? [...res] : res);
        }).catch(err => {
            toast.error(err?.message);
        })
    }, []);

    const keyLabels = {
        name: 'Имя',
        surname: 'Фамилия',
        email: 'Почта',
        country: 'Страна',
        phone: 'Телефон',
        telegram: 'Никнейм в телеграмм',
        vacancieName: 'Ссылка на вакансию',
        comment: 'Комментарий'
    }

    const handleModal = (ind) => {
        setOpenInd(ind);
        setOpenModal(true);
    }
    
    const handleClose = () => {
        setOpenInd(null);
        setOpenModal(false);
    }

    const handleDelete = (ind) => {
        let token = localStorage.getItem('token');
        deleteVacRequest(ind,token).then(res=>{
            setRequests(prev=>([...prev].filter((it,id)=>id!=ind)));
            toast.success('Вы успешно удалили заявку!');
        }).catch(err=>{
            toast.error(err?.message);
        })
    }

    return (
        <>
            {/* openModal &&
                <div className={styles.modalComponent} onClick={handleClose}>
                    <div className={styles.modalContainer} onClick={(e)=>e.stopPropagation()}>
                        {Object.keys(keyLabels).map(item=>(
                            <div className={styles.modalLine}>
                                <div className={styles.modalKey}>{keyLabels[item]+':'}</div>
                                {item=='vacancieName'?
                                <Link href={`/vacancies/${requests[openInd][item]}`}>{requests[openInd][item]}</Link>
                                :
                                <div className={styles.modalValue}>{requests[openInd][item]||'Не указано'}</div>
                                }
                            </div>
                        ))}
                        <div className={styles.modalFilesContainer}>
                            
                        </div>
                    </div>
                </div> */
            }
            <div className={styles.block}>
                <h1 className={styles.blockHeading}>
                    Ниже представлены все отклики на вакансию
                </h1>
                {
                    requests.length ?
                        <div className={styles.hrList}>
                            {
                                requests.map((item, ind) => (
                                    <HrListItem key={ind} item={item} />
                                ))
                            }
                        </div>
                        :
                        <div className={styles.clearListBanner}>

                        </div>
                }

            </div>

        </>
    )
}

export default HrListBlock;