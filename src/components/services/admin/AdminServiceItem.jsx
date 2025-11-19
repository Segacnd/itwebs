'use client'
import { useState } from 'react';
import * as styles from '../../../styles/servicesAdmin.module.css';
import ServiceStrModal from './ServiceStrModal';
import ServiceTextModal from './ServiceTextModal';
import ServiceArrModal from './ServiceArrModal';

const AdminServiceItem = ({name,title,description,dops,ways,seoText,id}) => {
    const [inputObj,setInputObj] = useState({name,title,description,dops,ways,seoText});
    const [openStrModal,setOpenStrModal] = useState(null);
    const [openArrModal,setOpenArrModal] = useState(null);
    const [openTextModal,setOpenTextModal] = useState(null);
    return(
        <>
            {openStrModal!==null && <ServiceStrModal id={id} setMain={setInputObj} type={openStrModal} value={inputObj[openStrModal]} setOpen={setOpenStrModal} />}
            {openTextModal!==null && <ServiceTextModal id={id} setMain={setInputObj} type={openTextModal} value={inputObj[openTextModal]} setOpen={setOpenTextModal} />}
            {openArrModal!==null && <ServiceArrModal id={id} setMain={setInputObj} type={openArrModal} value={inputObj[openArrModal]} setOpen={setOpenArrModal} />}
            <div className={styles.adminServiceItem}>
                <div onClick={()=>setOpenStrModal('name')}>{inputObj.name}</div>
                <div onClick={()=>setOpenStrModal('title')}>{inputObj.title}</div>
                <div onClick={()=>setOpenTextModal('description')}>Description</div>
                <div onClick={()=>setOpenArrModal('dops')}>Допы к услуге</div>
                <div onClick={()=>setOpenArrModal('ways')}>Направления</div>
                <div onClick={()=>setOpenTextModal('seoText')}>SEO</div>
                <button>Удалить</button>
            </div>
        </>
    )
}

export default AdminServiceItem;