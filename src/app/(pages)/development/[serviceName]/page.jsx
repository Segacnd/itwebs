'use server'
import axios from 'axios';
import '../../../../../envConfig';
import * as styles from './detail.module.css';
import Broken from '../../../../components/global/Broken';
import BackArrow from '@/components/vacancies/BackArrow';
import DetailBusinessType from '@/components/services/own/detailBusinessType';
import DetailButtonsPair from '@/components/services/own/detailButtonsPair';
import DetailTech from '@/components/services/own/detailTech';
import ServiceSeoBlock from '@/components/global/seoBlock/ServiceSeoBlock';
import DetailPayments from '@/components/services/own/detailPayments';
import * as motion from 'motion/react-client';
import QuizBanner from '@/components/quiz/QuizBanner';
import Image from 'next/image';


export const loadServiceInfo = async (name) => {
    try {
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/developments/${name}`, {
            timeout: 5000,
            headers: {
                'Cache-Control': 'no-cache, no-store'
            }
        })
        const { data } = response;
        return data;
    } catch (err) {
        // console.log(err.response ? err.response.data?.message : err?.message);
        return null;
    }
}


export const generateMetadata = async ({ params }) => {
    const pars = await params;
    let serviceName = pars.serviceName;
    const data = await loadServiceInfo(serviceName);
    const titles = {
        'landing': 'Заказать разработку Landing-Page',
        'ecommerce': 'Заказать разработку интернет-магазина',
        'fintech': 'Разработка финансово-технических проектов',
        'corporate': 'Заказать разработку корпоративного сайта',
        '1c': 'Заказать настройку(разработку) 1С продукта',
        'seo': 'Заказать SEO-оптимизацию сайта',
        'complex': 'Комплексное IT-обслуживание организации',
        'upworks': 'Доработки по сайту'
    }, descs = {
        'landing': 'В компании ITs вы можете заказать разработку сайта ( Landing-Page ) с уникальным дизайном. Срок разработки сайта от 14 дней.',
        'ecommerce': 'Разработка интернет-магазина с уникальным дизайном, оплатой и ЛК. Срок разработки сайта от 30 дней. Поддержка сайта 2 мес.',
        'fintech': 'Разработка финансово-технических проектов на длительный срок в компании ITs. Команда профессионалов выполнит все ваши ожидания.',
        'corporate': 'Разработка корпоративного сайта с авторским дизайном и профессиональным подходом от маркетологов. Срок разработки от 30 дней.',
        '1c': 'Заказать настройку(разработку) 1С продукта можно в компании ITs. Команда профессионалов выполнит все ваши требования по проекту с гарантией.',
        'seo': 'SEO-оптимизация сайта, вывод в топ-10 в выдаче по региону, составление семантического ядра. Для подробной информации закажите бесплатную консультацию.',
        'complex': 'Комплексное IT-обслуживание организации. Обслуживание ваших серверов, поддержка сайта, поддержка 1С продуктов, поддержка приложений.',
        'upworks': 'Доработки по сайту различного вида и сложности.'
    }
    return {
        title: data ? data.title : titles[serviceName],
        description: data ? data.description : descs[serviceName]
    }
}

const DetailService = async ({ params }) => {
    const defaultData = {
        name: 'Разработка интернет-магазина',
        detailText: 'Мы создаём интернет-магазины, которые не просто «висят в сети», а реально продают. Современный дизайн, удобная навигация, адаптивность под любые устройства и встроенные инструменты для роста вашего бизнеса',
        ways: [
            'Одежда и обувь',
            "Электроника и техника",
            "Косметика и парфюмерия",
            "Продукты питания и доставка",
            "Товары для дома и интерьера",
            "Автотовары и аксессуары",
            "Образовательные и цифровые продукты",
        ],
        dops: [
            "Полноценный интернет-магазин с катологом и корзиной",
            "Возможность оплаты товаров прямо на сайте",
            "Управление заявками и заказами прямо с сайта через панель администратора",
            "СЕО-оптимизированный продукт для привлечения новых клиентов в интернете",
            "Уникальный дизайн идущий вместе со всеми исходниками",
            "Поддержка сайта в течении первого месяца после запуска",
            "Полную настройку вплоть до деплоя на понравившийся вам домен",
        ],
        id: 0,
        techIcons: [],
        detailImageName: 'default.jpg'
    }
    let data = {}
    const pars = await params;
    const serviceName = pars.serviceName;
    const serviceData = await loadServiceInfo(serviceName);
    data = serviceData ? {...serviceData} : {...defaultData};
    // const service = await loadServiceInfo(serviceName);
    // if(!service){
    //     return (<>
    //         <Broken/>
    //     </>)
    // }
    return (
        <>
            <div className={styles.detailHeading}>
                <BackArrow />
                <h1>{data.name ? data.name : 'Веб-разработка различной сложности'}</h1>
            </div>
            <div className={styles.headBanner}>
                <div className={styles.headBannerSVG}>
                    <svg viewBox="0 0 723 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H723L476.5 519.856L0 522V0Z" fill="#1A1A1A" />
                    </svg>
                    <motion.div
                        initial={{ transform: 'translateX(-90%)' }}
                        transition={{ duration: 1 }}
                        viewport={{ amount:'some' }}
                        whileInView={{ transform: 'translateX(-15%) translateY(-5svh)' }}
                        className={styles.svgText}>
                        {data.detailText ? data.name+'. '+data.detailText : defaultData.detailText}
                    </motion.div>
                </div>
                <div className={styles.mobileHeadBannerSVG}>
                    <svg viewBox="0 0 270 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H320V145.5L0 204V0Z" fill="#1A1A1A" />
                    </svg>
                    <motion.div
                        initial={{ transform: 'translateX(-90%)' }}
                        viewport={{ amount:'some' }}
                        transition={{ duration: 1 }}
                        whileInView={{ transform: 'translateX(0)' }}
                        className={styles.svgText}>
                        {data.detailText ? data.name+'. '+data.detailText : defaultData.detailText}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ transform: 'translateX(90%)' }}
                        viewport={{ amount:'some' }}
                    transition={{ duration: 1 }}
                    whileInView={{ transform: 'translateX(0)' }}
                    className={styles.headBannerImage}>
                    <Image className={styles.detailImage} src={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/development/${data.detailImageName||'default.jpg'}`} alt={data.name} title={data.name} fill={true} />
                </motion.div>
            </div>
            <DetailBusinessType types={data.ways} gets={data.dops} />
            <DetailButtonsPair serviceLink={serviceName} />
            <DetailPayments />
            <QuizBanner group={'development'} />
            <DetailTech techIcons={data.techIcons} />
            <ServiceSeoBlock link={serviceName} dops={data.dops} ways={data.ways}/>
        </>
    )
}

export default DetailService;