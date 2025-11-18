'use client'
import { useEffect, useState } from 'react';
import * as styles from './adminComponent.module.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../store/hooks';

const AdminHeading = (props) => {
    const router = useRouter();
    let user = useAppSelector(state => state.mainReducer.user);
    const token = localStorage.getItem('token')
    let fc = () => {
        let curUser = user;
        if (!curUser.auth) {
            if(!token)
            router.push('not-allowed');
            else{
                setTimeout(()=>{
                    fc();
                },3000)
            }
        }
    }
    useEffect(() => {
        fc();
    }, []);
    return (
        <div className={styles.panelHeading} {...props}>
            <div>{user.username}</div>
            <div className={styles.adminHead} onClick={()=>router.push('/admin')}>Admin Panel</div>
            <div>{user.email}</div>
        </div>
    )
}

export default AdminHeading