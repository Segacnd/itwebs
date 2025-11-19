'use client'
import { useEffect, useState } from 'react';
import * as styles from '../../../styles/servicesAdmin.module.css';
import { adminLoadServices } from '../../../services/services/adminLoadServices.service';
import Loader from '../../global/Loader';
import { toast } from 'react-toastify';
import AdminServiceItem from './AdminServiceItem';
import ServiceCreateModal from './ServiceCreate';

const ServicesAdminList = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalCreate,setModalCreate] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(() => {
        setLoading(true)
        adminLoadServices(token).then(res => {
            setServices(res);
            console.log(services);
        }).catch(err=>toast.error(err?.message)).finally(()=>{setLoading(false)});
    }, []);
    return (
        <>
            {loading && <Loader/>}
            {modalCreate && <ServiceCreateModal setList={setServices} setOpen={setModalCreate} />}
            <button onClick={()=>setModalCreate(true)} className={styles.createServiceButton}>Создать услугу</button>
            <div className={styles.servicesContainer}>
                {services.length>0&&services.sort((a,b)=>a.id-b.id).map(item=>(
                    <AdminServiceItem key={item.name} id={item.id} name={item.name} title={item.title} description={item.description} seoText={item.seoText}
                        ways={item.ways} dops={item.dops}
                     />
                ))}
            </div>
        </>
    )
}

export default ServicesAdminList;