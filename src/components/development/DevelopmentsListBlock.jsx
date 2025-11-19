'use server'

import * as styles from './listBlock.module.css';
import * as globalStyles from '../../styles/app.module.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../../../envConfig'
import ServicesList from '../global/services/ServicesList';
import AboutBlockHeading from '../about/AboutBlockHeading';
import { Arapey } from 'next/font/google';


const DevelopmentsList = async () => {
    let list = [];
    try{
        const {data} = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/developments`,{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store',
            }
        });
        const result = data ? Array.isArray(data)?data:[data]:data;
        list = result?result:list;
    }catch(err){
        console.log(err)
    }
    const defaultList = [{name:'Лендинг', link:'landing'},{name:'Корпорат', link:'corporate'},{name:'Интернет-магазин', link:'ecommerce'}];
    return(
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Какие услуги мы предоставляем'} style={{paddingLeft: '7vw', color:'white'}} transform={'uppercase'} weight={700}/>
            <ServicesList route={'/development/'} list={list.length?list:defaultList}/>
        </div>
    )
}

export default DevelopmentsList;