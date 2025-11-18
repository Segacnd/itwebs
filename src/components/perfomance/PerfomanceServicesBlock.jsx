'use server'

// import * as styles from './servicesBlock.module.css';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from '../about/AboutBlockHeading';
import '../../../envConfig';
import axios from 'axios';
import ServicesList from '../global/services/ServicesList';

export const loadMarketingServices = async () => {
    class ListItem{
        constructor(name,link){
            this.name=name;
            this.link=link;
        }
    }
    const defaultList = [
        new ListItem('Таргетированные рекламные кампании в социальных сетях','target'),
        new ListItem('Рекламные кампании на развлекательных сайтах','fun'),
        new ListItem('Закупка трафика','buying')
    ];
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/perfomance`,{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        });
        if(!response.data || !response.data.length)
            throw new Error('Список пуст');
        const {data} = response;
        return data;
    }catch(err){
        return defaultList;
    }
}

const PerfomanceServicesBlock = async () => {

    const list = await loadMarketingServices();
    return(
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Какие услуги в данной области мы предоставляем ?'} style={{color:'white', paddingLeft: '7vw', fontFamily:"Gilroy Bold, sans-serif"}} transform={'uppercase'} weight={700} />
            <ServicesList route={'/marketing/perfomance/'} list={list} />
        </div>
    )
}

export default PerfomanceServicesBlock;