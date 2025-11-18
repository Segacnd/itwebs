'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as styles from './adminComponent.module.css';
import { toast } from 'react-toastify';
import AdminHeading from './AdminHeading';
import ChangeLogin from './ChangeLogin';
import CreateModeratorModal from './CreateModeratorModal';

const PanelComponent = () => {
    const router = useRouter();
    const [loginModal, setLoginModal] = useState(false);
    const [createModerModal, setCreateModerModal] = useState(false)
    const user = useAppSelector(state => state.mainReducer.user);
    const token = localStorage.getItem('token');
    const dispatch = useAppDispatch();
    return (
        <>
            {loginModal && <ChangeLogin setOpen={setLoginModal} />}
            {createModerModal && <CreateModeratorModal setOpen={setCreateModerModal} />}
            <div className={styles.panelComponent}>
                <AdminHeading />
                <div className={styles.panelContainer}>
                    <Link href={'/admin/open-requests'} style={{ textDecoration: 'none', color: 'white' }} className={styles.panelItem}>
                        Открытые заявки
                    </Link>
                    <Link href={`/admin/my-requests/${token}`} style={{ textDecoration: 'none', color: 'white' }} className={styles.panelItem}>
                        Мои заявки
                    </Link>
                    <div onClick={() => setLoginModal(true)} className={styles.panelItem}>
                        Сменить логин
                    </div>
                    <Link href={'/admin/hr'} style={{ textDecoration: 'none', color: 'white' }} className={styles.panelItem}>
                        Отклики на вакансии
                    </Link>
                    <div onClick={() => { toast.success('Вы успешно вышли из аккаунта!'); dispatch({ type: "LOGOUT" }); router.push('/'); localStorage.removeItem('token') }} className={styles.panelItem}>
                        Выход
                    </div>
                    {
                        user.permissions === 'admin' &&
                        <>
                            <Link style={{ textDecoration: 'none', color: 'white' }} href={`/admin/all-requests/${token}`} className={styles.panelItem}>
                                Все заявки
                            </Link>
                            <div onClick={() => setCreateModerModal(true)} className={styles.panelItem}>
                                Назначить модератора
                            </div>
                            <Link href={`/admin/moderators/${token}`} style={{ textDecoration: 'none', color: 'white' }} className={styles.panelItem}>
                                Список модераторов
                            </Link>
                            <Link href={'/admin/vacancies'} style={{ textDecoration: 'none', color: 'white' }} className={styles.panelItem}>
                                Вакансии
                            </Link>
                            <Link href={'/admin/services'} style={{ textDecoration: 'none', color: 'white' }} className={styles.panelItem}>
                                Услуги
                            </Link>
                        </>

                    }
                </div>

            </div>
        </>
    )
}

export default PanelComponent;