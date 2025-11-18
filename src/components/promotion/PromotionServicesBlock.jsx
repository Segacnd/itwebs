'use server'

// import * as styles from './servicesBlock.module.css';
import * as globalStyles from '../../styles/app.module.css';
import AboutBlockHeading from '../about/AboutBlockHeading';
import '../../../envConfig';
import axios from 'axios';
import ServicesList from '../global/services/ServicesList';

export const loadPromotionServices = async () => {
    let server=false;
    class ListItem{
        constructor(name,link,listDesc='',listIcon=''){
            this.name=name;
            this.link=link;
            this.listDesc=listDesc;
            this.listIcon=listIcon;
        }
    }
    const defaultList = [
        new ListItem('Social Media Marketing','smm',"Весь контент формируется исходя из целей заказчика по привлечению трафика.",'streamline-ultimate:corporate-social-media'),
        new ListItem('Привлечение трафика (perfomance)','perfomance','Закупка трафика, рекламные кампании на развлекательных сайтах и социальных сетях','material-symbols:web-traffic-rounded')
    ];
    try{
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/promotions`,{
            timeout: 5000,
            headers:{
                'Cache-Control':'no-cache, no-store'
            }
        });
        if(!response.data || !response.data.length)
            throw new Error('Список пуст');
        const {data} = response;
        server=true;
        return [...data]
    }catch(err){
        console.log(err.response?err.response.data:err.message);
        return defaultList;
    }
}

const PromotionServicesBlock = async () => {

    const list = await loadPromotionServices();
    return(
        <div className={globalStyles.block}>
            <AboutBlockHeading text={'Какие услуги мы предоставляем ?'} style={{color:'white', paddingLeft: '7vw', fontFamily:"Gilroy Bold, sans-serif"}} transform={'uppercase'} weight={700} />
            <ServicesList route={'/promotion/'} list={list} />
        </div>
    )
}

export default PromotionServicesBlock;