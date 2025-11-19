"use client"
import { useEffect, useRef, useState } from 'react';
import * as styles from './adminNewRItem.module.css';
import { Icon } from '@iconify/react';
import { convertDate } from '@/utils/convertDate.util';
import { takeRequest } from '@/services/admin/takeRequest';
import { toast } from 'react-toastify';

const AdminNewRequestItem = ({ item }) => {
    const [openModal, setOpenModal] = useState(false);
    let detailRef = useRef(null);
    let token;
    useEffect(() => {
        let curToken =
            localStorage.getItem('token');
        token = curToken;
    }, [])
    const handleClose = () => {
        if (detailRef.current)
            detailRef.current.style.transform = 'translateX(50vw)';
        setTimeout(() => {
            setOpenModal(false);
        }, 2000);
    }
    const handleOpen = () => {
        setOpenModal(true);
        setTimeout(() => {
            if (detailRef.current)
                detailRef.current.style.transform = 'translateX(0)';
        }, 100)
    }

    const handleAnswer = () => {
        let curToken = localStorage.getItem('token');
        takeRequest(curToken, item.id).then(res => {
            toast.success('Вы успешно приняли заявку в обработку!');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }).catch(err => toast.error('Во время выполнения произошла ошибка'));
    }

    const handleDelete = () => {
        toast.error('Delete')
    }
    return (
        <>
            {openModal &&
                <div ref={detailRef} className={styles.detailInfoComponent} onClick={handleClose}>
                    <div className={styles.detailInfoContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.detailManagerLine}>
                            <div className={styles.detailInfoId}>
                                Заявка №{item.id}
                            </div>
                            <button onClick={() => item.manager ? handleDelete() : handleAnswer()} style={{ backgroundColor: item.manager ? 'red' : 'green' }}>
                                {item.manager == null ? 'Принять заявку' : 'Удалить заявку'}
                            </button>
                        </div>
                        <div className={styles.detailInfoStates}>
                            <div className={styles.statePair}>
                                <label>
                                    <Icon className={styles.labelIcon} icon={'hugeicons:manager'} /> Менеджер
                                </label>
                                <div className={[styles.statePairDiv, styles.statePairDivManager].join(' ')} style={{ backgroundColor: item.manager ? 'green' : 'red' }}>
                                    {item.manager || 'Не назначен'}
                                </div>
                            </div>
                            <div className={styles.statePair}>
                                <label>
                                    Дата поступления заявки
                                </label>
                                <div className={styles.statePairDiv}>
                                    {convertDate(item.createdAt)}
                                </div>
                            </div>
                            <div className={styles.statePair}>
                                <label>
                                    Дата принятия заявки
                                </label>
                                <div className={styles.statePairDiv}>
                                    {item.manager ? convertDate(item.updatedAt) : 'Не принята'}
                                </div>
                            </div>
                        </div>
                        <div className={styles.detailPersonData}>
                            <div className={styles.detailHeadingPair}>
                                <label>Имя клиента:</label>
                                <div>{item.name}</div>
                            </div>
                            <div className={styles.detailHeadingPair}>
                                <label>Почта клиента: </label>
                                <div>{item.email}</div>
                            </div>
                            <div className={styles.detailHeadingPair}>
                                <label>Номер телефона клиента: </label>
                                <div>{item.phone || 'null'}</div>
                            </div>
                            <div className={styles.detailHeadingPair}>
                                <label>Комментарий: </label>
                                <div className={styles.detailComment}>
                                    {item.comment}
                                </div>
                            </div>
                        </div>
                        <div className={styles.detailRequestData}>
                            <div className={styles.detailRequestPair}>
                                <label>Тип заказываемой услуги: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.service || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Тип сайта: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.service || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Доп функции по заказу: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.funcs && item.funcs.length > 0 ?
                                        <div className={styles.detailRequestFuncsList}>
                                            {item.funcs.map(el => (
                                                <div key={el} className={styles.detailRequestFuncsItem}>
                                                    {el}
                                                </div>
                                            ))}
                                        </div>
                                        : 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Ориентировочная цена по заказу: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.price || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Кол-во страниц: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.pages || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Кол-во страниц для продвижения: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.seoPages || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Запрашиваемый дизайн: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.design || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Deadline: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.deadline || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Желаемое время для продвижения: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.seoTime || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Кол-во блоков (для лендинга): </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.blocks || 'null'}
                                </div>
                            </div>
                            <div className={styles.detailRequestPair}>
                                <label>Необходимая поддержка: </label>
                                <div className={styles.detailRequestDataValue}>
                                    {item.support || 'null'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div key={item.id} className={styles.itemComponent}>
                <div className={styles.itemInfo} style={{ justifyContent: 'flex-start' }}>
                    №{item.id}
                </div>
                <div className={styles.itemInfo}>
                    {convertDate(item.createdAt)}
                </div>
                <div className={styles.itemInfo}>
                    {item.group}
                </div>
                <div className={styles.itemButton}>
                    <button onClick={handleOpen}>
                        Детально
                    </button>
                </div>
                {
                    !item.manager ?
                        <div className={styles.itemButton}>
                            <button onClick={handleAnswer}>
                                Принять
                            </button>
                        </div>
                        :
                        <div className={styles.itemButton}>
                                Заявка закреплена за вами
                        </div>
                }
            </div>
        </>
    )
}

export default AdminNewRequestItem;