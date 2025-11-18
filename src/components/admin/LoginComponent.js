'use client'
import { useState } from 'react';
import * as styles from './adminComponent.module.css';
import axios from 'axios';
import { sendLoginData } from '../../services/admin/sendLoginData.service';
import { useAppDispatch } from '../../store/hooks';
import { toast } from 'react-toastify';

const LoginComponent = () => {
    const defaultState = {
        login: '',
        password: ''
    }
    const [inputObj, setInputObj] = useState({...defaultState});
    const dispatch = useAppDispatch();
    const tryToLogin = () => {
        sendLoginData(inputObj).then(res=>{
            dispatch({type:"LOGIN",payload:{...res}});
            localStorage.setItem('token',res.token);
            toast.success(`${res.username[0].toUpperCase()+res.username.slice(1)}, добро пожаловать!`)
        }).catch(err=>toast.error(err?.message));
    }
    return (
        <div className={styles.loginComponent}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                tryToLogin();
            }} className={styles.loginContainer}>
                <h2 className={styles.loginHeading}>
                    admin login
                </h2>
                <div className={styles.loginInputs}>
                    <div className={styles.loginInputPair}>
                        <label>Login</label>
                        <input type='text' value={inputObj.login} style={{border: inputObj.login.length!=0&&inputObj.login.length<5?'1px solid red':'1px solid rgba(47, 45, 45, 0.4)'}} onChange={(e)=>setInputObj(prev=>({...prev,login:e.target.value}))} placeholder='username/email'></input>
                    </div>
                    <div className={styles.loginInputPair}>
                        <label>Password</label>
                        <input type='password' style={{border: inputObj.password.length!=0&&inputObj.password.length<5?'1px solid red':'1px solid rgba(47, 45, 45, 0.4)'}} value={inputObj.password} onChange={(e)=>setInputObj(prev=>({...prev,password:e.target.value}))} placeholder='password'></input>
                    </div>
                    <div className={styles.loginInputPair}>
                        <button type='submit'>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent