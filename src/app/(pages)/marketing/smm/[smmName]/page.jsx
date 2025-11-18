'use server'
import axios from 'axios';
import '../../../../../../envConfig';
import * as styles from './detail.module.css';
import Broken from '@/components/global/Broken';
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
    const defaultData = {
        name: 'SMM detail',
        detailText: 'Detail text',
        detailImageName: 'default.jps',
        link: 'default',
        ways: [],
        dops: [],
        techIcons: [],
    }
    try {
        const response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/smm/${name}`, {
            timeout: 5000,
            headers: {
                'Cache-Control': 'no-cache, no-store'
            }
        })
        const { data } = response;
        return data;
    } catch (err) {
        console.log(err.response ? err.response.data?.message : err?.message);
        return defaultData;
    }
}


export const generateMetadata = async ({ params }) => {
    const pars = await params;
    let serviceName = pars.smmName;
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
        title: data && data.title ? data.title : titles[serviceName] ? titles[serviceName] : 'Social Media Marketing | ITWEBS',
        description: data && data.description ? data.description : descs[serviceName] ? descs[serviceName] : 'Social Media Marketing | ITWEBS'
    }
}

const DetailService = async ({ params }) => {
    const pars = await params;
    const serviceName = pars.smmName;
    const data = await loadServiceInfo(serviceName);
    return (
        <>
            <div className={styles.detailHeading}>
                <BackArrow />
                <h1>{data?.name ? data.name : 'Маркетинг в области социальных услуг'}</h1>
            </div>
            <div className={styles.headBanner}>
                <div className={styles.headBannerSVG}>
                    <svg viewBox="0 0 723 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H723L476.5 519.856L0 522V0Z" fill="#1A1A1A" />
                    </svg>
                    <motion.div
                        initial={{ transform: 'translateX(-90%)' }}
                        viewport={{ amount:'some' }}
                        transition={{ duration: 1 }}
                        whileInView={{ transform: 'translateX(0)' }}
                        className={styles.svgText}>
                        {data?.name + '. ' + data?.detailText}
                    </motion.div>
                </div>
                <div className={styles.mobileHeadBannerSVG}>
                    <svg viewBox="0 0 320 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H320V145.5L0 204V0Z" fill="#1A1A1A" />
                    </svg>
                    <motion.div
                        initial={{ transform: 'translateX(-90%)' }}
                        viewport={{ amount:'some' }}
                        transition={{ duration: 1 }}
                        whileInView={{ transform: 'translateX(0)' }}
                        className={styles.svgText}>
                        {data?.detailText}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ transform: 'translateX(90%)' }}
                        viewport={{ amount:'some' }}
                    transition={{ duration: 1 }}
                    whileInView={{ transform: 'translateX(0)' }}
                    className={styles.headBannerImage}>
                    <Image className={styles.detailImage} fill={true} src={`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/smm/${data.detailImageName||'default.jpg'}`} alt={data.name} title={data.name} />
                </motion.div>
            </div>
            <DetailBusinessType types={data?.ways} gets={data?.dops} />
            <DetailButtonsPair serviceLink={serviceName} />
            <DetailPayments />
            <QuizBanner group={'smm'} />
            <DetailTech techIcons={data?.techIcons} />
            <ServiceSeoBlock link={'smm-' + serviceName} ways={data?.ways} dops={data?.dops} />
        </>
    )
}

export default DetailService;