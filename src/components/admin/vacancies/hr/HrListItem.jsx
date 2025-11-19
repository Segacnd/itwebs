"use client"
import { useRef, useState } from 'react';
import * as styles from './hrItem.module.css';
import { downloadFile } from '@/services/admin/downloadFile.service';
import axios from 'axios';

const HrListItem = ({ item }) => {
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef();
    const handleOpen = () => {
        setOpenModal(true);
        setTimeout(() => {
            modalRef.current.style.transform = 'translateX(0) translateY(0)';
        }, 100);
    }
    const handleClose = () => {
        setTimeout(() => {
            setOpenModal(false)
        }, 1000)
        modalRef.current.style.transform = 'translateX(99%) translateY(99%)';

    }
    const handleDelete = () => {

    }
    const handleDownload = async () => {
        let token = localStorage.getItem('token');
        axios.post(`http://localhost:8000/user/download-candidate-file`, { token, id: item.id }, {
            responseType: 'blob',
            timeout: 5000
        }).then(res => {
            const blob = new Blob([res.data])
            const url = window.URL.createObjectURL(blob,{type:res.data.type});
            const link = document.createElement('a');
            link.download = item.telegram;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }
    return (
        <>
            {
                openModal &&
                <div ref={modalRef} onClick={handleClose} className={styles.modalComponent}>
                    <div onClick={(e) => { e.stopPropagation() }} className={styles.modalContainer}>
                        <div className={styles.modalHeading}>
                            Заявка №{item.id}
                        </div>
                        <div className={styles.infoLine} style={{ color: 'white' }}>
                            <label>Вакансия: </label>
                            {item.vacancieName}
                        </div>
                        <div className={styles.workerInfo}>
                            <div className={styles.modalHeading}>
                                Информация о кандидате
                            </div>
                            <div className={styles.infoLine}>
                                <label>Имя кандидата: </label>
                                {item.name}
                            </div>
                            <div className={styles.infoLine}>
                                <label>Фамилия: </label>
                                {item.surname}
                            </div>
                            <div className={styles.infoLine}>
                                <label>Номер телефона: </label>
                                {item.phone}
                            </div>
                            <div className={styles.infoLine}>
                                <label>Страна: </label>
                                {item.country}
                            </div>
                            <div className={styles.infoLine}>
                                <label>Почта: </label>
                                {item.email}
                            </div>
                            <div className={styles.infoLine}>
                                <label>Telegram: </label>
                                {item.telegram}
                            </div>
                        </div>
                        <div className={styles.commentBlock}>
                            <label>Комментарий</label>
                            <div className={styles.comment}>
                                {item.comment}
                            </div>
                        </div>
                        <div className={styles.fileBlock}>
                            <label>Скачать приложенный файл можно по кнопке ниже</label>
                            <button onClick={handleDownload}>Dondload</button>
                        </div>
                    </div>
                </div>
            }
            <div className={styles.itemComponent}>
                <div className={styles.itemColumn}>{item.updatedAt.split('T')[0].split('-').reverse().join('.')}</div>
                <div className={styles.itemColumn}>{item.name}</div>
                <div className={styles.itemColumn}>{item.telegram}</div>
                <div className={styles.itemColumn}>{item.vacancieName}</div>
                <div className={styles.itemColumn}>
                    <button onClick={handleOpen}>
                        Подробности
                    </button>
                </div>
                <div className={styles.itemColumn}>
                    <button onClick={handleDelete}>
                        Удалить
                    </button>
                </div>
            </div>
        </>
    )
}


export default HrListItem;