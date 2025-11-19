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
        new ListItem('Создание общей стратегии SMM','strategy'),
        new ListItem('Создание контента под ключ','content'),
        new ListItem('Создание уникальной стратегии для B2C проектов по спортсбуку и казино','b2c')
    ];
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/smm`,{
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

const SMMServicesBlock = async () => {

    const list = await loadMarketingServices();
    return(
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Какие услуги в данной области мы предоставляем ?'} style={{color:'white', paddingLeft: '7vw', fontFamily:"Gilroy Bold, sans-serif"}} transform={'uppercase'} weight={700} />
            <ServicesList route={'/marketing/smm/'} list={list} />
        </div>
    )
}

export default SMMServicesBlock;