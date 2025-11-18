'use client'
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import * as styles from './adminComponent.module.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const RootHeading = (props) => {
    const router = useRouter();
    let user = useAppSelector(state => state.mainReducer.user);
    let fc = () => {
        let token = localStorage.getItem('token');
        let curUser = user;
        if (!token)
            router.push('/unknown')
        else {
            if (!curUser.auth) {
                setTimeout(() => fc(), 3000);
            } else {
                if (curUser.permissions != 'admin')
                    router.push('/unknown');
            }
        }
    }
    useEffect(() => {
        setTimeout(fc(),3000)
    }, []);
    return (
        <div className={styles.panelHeading} {...props}>
            <div>{user.username}</div>
            <div className={styles.adminHead} onClick={() => router.push('/admin')} style={{color:'red'}}>Admin Panel</div>
            <div>{user.email}</div>
        </div>
    )
}

export default RootHeading;