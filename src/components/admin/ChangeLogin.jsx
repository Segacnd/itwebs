'use client'
import { useEffect, useState } from 'react';
import ModalHeading from '../global/ModalHeading';
import * as styles from './adminComponent.module.css';
import { toast } from 'react-toastify';
import { changeLogin } from '../../services/admin/changeLogin.service';
import { useAppDispatch } from '../../store/hooks';

const ChangeLogin = (props) => {
    const token = localStorage.getItem('token');
    const defaultState = {
        login: '',
        repeatLogin:'',
        password: '',
        token
    }
    const [inputObj,setInputObj] = useState({...defaultState});
    const dispatch = useAppDispatch();
    const tryToChange = () => {
        changeLogin(inputObj).then(res=>{
            toast.success(res);
            dispatch({type:"LOGOUT"});
            setInputObj({...defaultState});
            props.setOpen(false);
        }).catch(err=>toast.error(err?.message));
    }
    return(
        <div className={styles.modalComponent} onClick={()=>props.setOpen(false)}>
            <div className={styles.changeLogContainer} onClick={(e)=>e.stopPropagation()}>
                <ModalHeading color='black' mt={'0'} text='Change Login' setOpen={props.setOpen} />
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(inputObj.login!=''&&inputObj.login === inputObj.repeatLogin)
                        tryToChange();
                    else
                        toast.error('Значения в полях логина должны совпадать')
                }} className={styles.changeLogInputs}>
                    <div className={styles.changeLogInputPair}>
                        <label>Новый логин</label>
                        <input type='text' placeholder='New login' value={inputObj.login} onChange={(e)=>setInputObj(prev=>({...prev, login:e.target.value}))} />
                    </div>
                    <div className={styles.changeLogInputPair}>
                        <label>Повторите логин</label>
                        <input style={{boxShadow:inputObj.repeatLogin.length==''?'':inputObj.repeatLogin===inputObj.login?'0 0 4px 2px green':'0 0 4px 2px red'}} type='password' placeholder='New login' value={inputObj.repeatLogin} onChange={(e)=>setInputObj(prev=>({...prev, repeatLogin:e.target.value}))} />
                    </div>
                    <div className={styles.changeLogInputPair}>
                        <label>Текущий пароль</label>
                        <input type='password' placeholder='Password' value={inputObj.password} onChange={(e)=>setInputObj(prev=>({...prev, password:e.target.value}))} />
                    </div>
                    <button type='submit'>Сменить</button>
                </form>
            </div>
        </div>
    )
}

export default ChangeLogin;