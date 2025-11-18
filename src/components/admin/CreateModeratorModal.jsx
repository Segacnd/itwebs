'use client'
import * as styles from './adminComponent.module.css';
import ModalHeading from '../global/ModalHeading';
import { useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import { loadModeratorsInfo } from '@/services/admin/loadModeratorsInfo';
import { toast } from 'react-toastify';
import { regModerator } from '../../services/admin/regModerator.service';
import Loader from '../../components/global/Loader';

const CreateModeratorModal = (props) => {
    const token = localStorage.getItem('token');

    const defaultState={
        username:'',
        email:'',
        password:'',
        repeatPW:''
    }
    const [inputObj,setInputObj] = useState({...defaultState});

    const dispatch = useAppDispatch();
    const [moderators,setModerators] = useState([]);
    let moderState = useAppSelector(state=>state.mainReducer.moderators);
    useEffect(()=>{
        if(!moderState.loaded){
            loadModeratorsInfo(token).then(res=>{
                setModerators([...res]);
                dispatch({type:"LOAD_MODERATORS",payload:[...res]});
            }).catch(err=>toast.error('Список модераторов не загружен! Учитывайте это при создании аккаунта!'));
        }
    },[]);

    const [usernameValidate,setUsernameValidate] = useState(true);
    const [emailValidate,setEmailValidate] = useState(true);

    const registerModerator = () => {
        setLoading(true);
        if(inputObj.password!=inputObj.repeatPW || inputObj.password===''){
            setLoading(false)
            return toast.error('Поля паролей должны совпадать!')
        }
        if(moderators.findIndex(item=>item.email===inputObj.email)!=-1){
            setLoading(false)
            toast.error('Модератор с такой почтой уже существует!');
            return setEmailValidate(false);
        }
        if(moderators.findIndex(item=>item.username===inputObj.username)!=-1){
            setLoading(false)
            return toast.error('Модератор с таким именем пользователя уже существует!')
        }
        const sentObj={...inputObj,token};
        regModerator({...sentObj}).then(res=>{
            toast.success(res);
            setInputObj({...defaultState});
            props.setOpen(false);
        }).catch(err=>toast.error(err?.message)).finally(()=>setLoading(false));
    }

    const [loading,setLoading] = useState(false);

    return(
        <div className={styles.modalComponent} onClick={()=>props.setOpen(false)}>
        {loading&&<Loader/>}
            <div className={styles.createModerModalContainer} onClick={(e)=>e.stopPropagation()}>
                <ModalHeading setOpen={props.setOpen} text='Create new moderator' color='gray' width='60vw'/>
                <div style={{fontFamily:'Nunito, sans-serif', fontSize: '1.2vw', color: 'gray', alignSelf:'flex-start'}}>Окно для регистрации модератора</div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    registerModerator();
                }} className={styles.createModerInputs}>
                    <div className={styles.createModerInputPair}>
                        <label style={{color: inputObj.email!=''?'black':''}}>Введите почту нового модератора</label>
                        <input type='text' placeholder='email' style={{color: emailValidate?'':'red',boxShadow:emailValidate?'':'0 0 12px 3px red'}} value={inputObj.email} onChange={(e)=>{setInputObj(prev=>({...prev, email:e.target.value}));!emailValidate&&setEmailValidate(true)}} />
                    </div>
                    <div className={styles.createModerInputPair}>
                        <label style={{color: inputObj.username!=''?'black':!usernameValidate?'red':'', boxShadow: usernameValidate?'':'0 0 12px 3px red'}}>Введите имя пользователя нового модератора</label>
                        <input type='text' placeholder='username' value={inputObj.username} onChange={(e)=>{setInputObj(prev=>({...prev, username:e.target.value}));!usernameValidate&&setUsernameValidate(true)}} />
                    </div>
                    <div className={styles.createModerInputPair}>
                        <label style={{color: inputObj.password!=''?'black':''}}>Введите пароль нового модератора</label>
                        <input type='password' style={{color: inputObj.password!=''?'black':'', boxShadow: inputObj.password!=''&&inputObj.password==inputObj.repeatPW?'0 0 5px 2px green':inputObj.password==''?'':inputObj.repeatPW!=''?'0 0 5px 2px red':''}} placeholder='password' value={inputObj.password} onChange={(e)=>setInputObj(prev=>({...prev, password:e.target.value}))} />
                    </div>
                    <div className={styles.createModerInputPair}>
                        <label style={{color: inputObj.repeatPW!=''?'black':''}}>Повторите пароль нового модератора</label>
                        <input type='password' style={{boxShadow: inputObj.password==inputObj.repeatPW && inputObj.password!=''?'0 0 5px 2px green':inputObj.repeatPW==''?'':'0 0 5px 2px red', color: inputObj.repeatPW.length==0?'':'black'}} placeholder='password' value={inputObj.repeatPW} onChange={(e)=>setInputObj(prev=>({...prev, repeatPW:e.target.value}))} />
                    </div>
                    <button type='submit'>Создать!</button>
                </form>
            </div>
        </div>
    )
}

export default CreateModeratorModal