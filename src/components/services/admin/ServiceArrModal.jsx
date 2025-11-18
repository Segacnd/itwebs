'use client'
import { useState } from 'react';
import * as styles from '../../../styles/servicesAdmin.module.css';
import Loader from '../../global/Loader';
import { editServiceInfo } from '../../../services/services/editServiceInfo';
import { toast } from 'react-toastify';
import ModalHeading from '../../global/ModalHeading';

const ServiceArrModal = ({ type, setMain, setOpen, value, id }) => {
    const [arr, setArr] = useState([...value]);
    const [add,setAdd] = useState('');
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const saveChanges = () => {
        setLoading(true);
        editServiceInfo({id,token,[type]:[...arr]}).then(res=>{
            toast.success(res);
            setMain(prev=>({...prev, [type]:[...arr]}));
        }).catch(err=>toast.error(err?.message)).finally(()=>{setLoading(false);setOpen(null)})
    }

    const addToArr = (e) => {
        e.preventDefault();
        if(add.length<1)
            return toast.error('Поле для добавления должно быть заполнено')
        setArr(prev=>([...prev,add]));
        setAdd('');
    }
    return (
        <>
            {loading && <Loader/>}
            <div className={styles.modalComponent} onClick={()=>setOpen(null)}>
                <form onSubmit={(e)=>{e.preventDefault();saveChanges()}} className={styles.modalArrContainer} onClick={(e)=>e.stopPropagation()}>
                    <ModalHeading mb='10svh' setOpen={setOpen} closeVal={null} color='black' text={`Изменение ${type} услуги №${id}`} />
                    <div className={styles.addServiceArrModal}>
                        <input type='text' value={add} onChange={(e)=>setAdd(e.target.value)} />
                        <button type='button' onClick={addToArr}>Добавить</button>
                    </div>
                    {arr.map((item, ind) => (
                        <div key={ind + 1} className={styles.modalArrPair}>
                            <input type='text' value={arr[ind]} onChange={(e) => {
                                setArr(prev => ([...prev].map((el, index) => index == ind ? e.target.value : el)));
                            }} placeholder={item}/>
                            <button type='button' onClick={()=>setArr(prev=>([...prev].filter((item,index)=>index!==ind)))}>Delete</button>
                        </div>
                    ))}
                    <button type='submit'>Сохранить</button>
                </form>
            </div>
        </>
    )
}

export default ServiceArrModal;