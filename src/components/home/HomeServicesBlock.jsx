'use server'
import * as styles from './homeServices.module.css';
import * as globalStyles from '../../styles/app.module.css';
import Article from '../global/Article';
import HomeServiceItem from './HomeServiceItem';
import {loadHomeServices} from '../../services/services/loadHomeServices.service';

const HomeServicesBlock = async () => {
    class Service{
        constructor(name,path,img){
            this.homeName=name;
            this.link=path;
            this.homeImage=img;
        }
    }
    const defaultServices = [
        new Service('Финансово-технические"веб-проекты','fintech','6446b9800190cfb2fa80432291e8a64063bcba05-1.jpg'),
        new Service('Разработка"интернет-магазина','ecommerce','87f45173383a9ad75fdb42d61194bcb69a3ac39a-2.jpg'),
        new Service('Разработка"Landing-page','landing','887851387b7ad23b93ffa09a5d3b2e88df648d2d-3.jpg'),
        new Service('Разработка"корпоративного сайта','corporate','9b5c18de23d3b87bea40aa8d38cef71a7e46c1d8-4.jpg'),
        new Service('Настройка(разработка)"1С-продуктов','1c','dd8de25fa572e5aebe83dc871ae8be1aa7d963ec-5.jpg'),
        new Service('SEO-оптимизация"сайта','seo','4d7846f65bd77c0a602e4aa7b3c1fcfcd9730cf1-6.jpg'),
        new Service('Комплексные услуг','complex','a4b056605072233bb36e228b0a93179a70ecd46b-7.jpg')
    ]
    let services = await loadHomeServices();
    if(services===null || services.length<7)
        services=[...defaultServices];
    return (
        <div className={globalStyles.block}>
            <Article style={{position:'relative', width:'100%'}} heading='Наши услуги' />
            <div className={styles.servicesContainer}>
                {services.sort((a,b)=>a.id-b.id).slice(0,7).map((item,ind)=>(
                    <HomeServiceItem key={ind+1} image={item.homeImage} name={item.homeName} link={'/services/'+item.link} num={'0'+(ind+1)} />
                ))}
            </div>
        </div>
    )
}

export default HomeServicesBlock;