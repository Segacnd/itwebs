'use client'
import { useState } from 'react';
import * as styles from '../../../styles/servicesAdmin.module.css';
import Loader from '../../global/Loader';
import ModalHeading from '../../global/ModalHeading';
import { toast } from 'react-toastify';
import { createServiceItem } from '../../../services/services/createServiceItem.service';
import MetaServiceModal from './MetaServiceModal';

const ServiceCreateModal = ({ setOpen, setList }) => {
    const defaultState = {
        name: '',
        title: '',
        description: '',
        ways: '',
        dops: '',
        seoText: '',
        homeName:'',
        homeImage:''
    }
    const [inputObj, setInputObj] = useState({ ...defaultState });
    const [loading, setLoading] = useState(false);
    const [openMeta,setOpenMeta] = useState(false);
    const token = localStorage.getItem('token');
    const addService = (e) => {
        e.preventDefault();
        setLoading(true);
        for (let key in inputObj) {
            if (!inputObj[key])
            {
                setLoading(false);
                return toast.error('Все поля должны быть заполнены!');
            }
        }
        setOpenMeta(true);
    }
    const createCurService = () => {
        createServiceItem({ ...inputObj, token }).then(res => {
            toast.success(res);
            setInputObj({ ...defaultState });
            setOpen(false);
        }).catch(err => toast.error(err?.message)).finally(() => setLoading(false));
    }
    return (
        <>
            {loading && <Loader />}
            {openMeta===true && <MetaServiceModal setOpenThis={setOpenMeta} name={inputObj.name} createService={createCurService} />}
            <div className={styles.modalComponent} onClick={() => setOpen(false)}>
                <div className={styles.createContainer} onClick={(e) => e.stopPropagation()}>
                    <ModalHeading mt='5svh' text='Создать услугу' setOpen={setOpen} color='black' />
                    <form onSubmit={addService} className={styles.createInputs}>
                        <div className={styles.createInputPair}>
                            <label>Введите наименование</label>
                            <textarea value={inputObj.name} onChange={(e) => setInputObj(prev => ({ ...prev, name: e.target.value }))} type='text' placeholder='name' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Введите заголовок</label>
                            <textarea value={inputObj.title} onChange={(e) => setInputObj(prev => ({ ...prev, title: e.target.value }))} type='text' placeholder='title' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Введите текст описания</label>
                            <textarea value={inputObj.description} onChange={(e) => setInputObj(prev => ({ ...prev, description: e.target.value }))} type='text' placeholder='description' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Введите название для главной</label>
                            <textarea value={inputObj.homeName} onChange={(e) => setInputObj(prev => ({ ...prev, homeName: e.target.value }))} type='text' placeholder='homeName' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Введите название картинки главной</label>
                            <textarea value={inputObj.homeImage} onChange={(e) => setInputObj(prev => ({ ...prev, homeImage: e.target.value }))} type='text' placeholder='homeImage' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Введите направления в бизнесе разделяя запятой</label>
                            <textarea value={inputObj.ways} onChange={(e) => setInputObj(prev => ({ ...prev, ways: e.target.value }))} type='text' placeholder='Малый бизнес,Средний бизнес,юр. лица' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Что получит заказчик вместе с сайтом</label>
                            <textarea value={inputObj.dops} onChange={(e) => setInputObj(prev => ({ ...prev, dops: e.target.value }))} type='text' placeholder='Дизайн,Реклама,СЕО-продвижение' />
                        </div>
                        <div className={styles.createInputPair}>
                            <label>Введите SEO-текст</label>
                            <textarea type='text' value={inputObj.seoText} onChange={(e) => setInputObj(prev => ({ ...prev, seoText: e.target.value }))} placeholder='seoText' />
                        </div>
                            <button className={styles.createSubmit} type='submit'>Создать!</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default ServiceCreateModal