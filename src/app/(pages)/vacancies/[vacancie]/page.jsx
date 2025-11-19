'use server'
import * as styles from './detail.module.css';
import * as globalStyles from '../../../../styles/app.module.css';
import '../../../../../envConfig';
import { Icon } from '@iconify/react';
import BackArrow from '@/components/vacancies/BackArrow';
import DetailPoint from './detailPoint';
import DetailRequest from './detailRequest';
import axios from 'axios';


export const generateMetadata = async ({ params }) => {


    const vacanciesData = {
        fullstack: {
            title: 'Вакансия fullstack-разработчика',
            description: 'Компания ITwebs находится в поиске fullstack-разработчика на постоянное место работы. Удаленная работа, гибкий график'
        },
        frontend: {
            title: 'Вакансия frontend-разработчика',
            description: 'Компания ITwebs находится в поиске frontend-разработчика на постоянное место работы. Удаленная работа, гибкий график'
        }
    }


    const pars = await params;
    const { vacancie } = pars;
    return (
        {
            title: vacanciesData[vacancie]?.title||'Вакансия',
            description: vacanciesData[vacancie]?.description||"Вакансия",
            authors: [{ name: 'ITWEBS' }],
            openGraph: {
                title: 'Разработка сайтов под ключ | ITs',
                description: 'Разработка сайтов и веб-приложений различной сложности. Landing-page, корпоративный сайт, интернет-магазин, SEO-продвижение',
                url: `https://itwebs.by/`,
                siteName: "Разработка сайтов под ключ | ITs",
                locale: "ru_RU",
                type: "article",
                publishedTime: "2020-10-11T00:00:00.000Z",
                authors: ['ITWEBS'],
                images: [
                    {
                        url: `https://imgur.com/c1221968-2875-426c-b27c-33dd23252f9d`,
                        width: 1200,
                        height: 630,
                        alt: 'Разработка сайтов под ключ| ITs',
                    },
                ],
            },
        }
    )
}



const VacanciePage = async ({ params }) => {

    const VacanciesObj = {
        fullstack: {
            name: 'Fullstack разработчик',
            sallary: '5000 BYN за 30 дней',
            conditions: [
                'Официальное оформление',
                "Удаленная работа",
                "Молодая команда и дружеский коллектив",
                "Карьерный рост"
            ],
            requirments: [
                'Уверенное владение JavaScript, HTML, CSS',
                'Навыки работы в команды',
                "Знание и навыки работы с GIT",
                'Уверенное знание Node, Next, Express'
            ],
            responsibilities: [
                'Взаимодействие с командой', "Ежедневная отчетность перед PM и Lead", "Контроль качества и ответственности"
            ]
        },
        frontend: {
            name: 'Frontend разработчик',
            sallary: '3000 BYN за 30 дней',
            conditions: [
                'Официальное оформление',
                "Удаленная работа",
                "Молодая команда и дружеский коллектив",
                "Карьерный рост"
            ],
            requirments: [
                'Уверенное владение JavaScript, HTML, CSS',
                'Навыки работы в команды',
                "Знание и навыки работы с GIT",
                'Уверенное знание Node, Next, Express'
            ],
            responsibilities: [
                'Взаимодействие с командой', "Ежедневная отчетность перед PM и Lead", "Контроль качества и ответственности"
            ]
        }
    }

    const pars = await params;
    const { vacancie } = pars;
    let data;
    try {
        let response = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/app/vacancie/${vacancie}`, {
            timeout: 5000,
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        data = response.data;
    }
    catch(err){
        data = null;
    }


    data = data ? data : VacanciesObj.frontend;

    return (
        <>
            <div className={styles.head}>
                <BackArrow />
                <h1>{data.name}</h1>
            </div>
            <div className={styles.infoContainer}>
                <p>{data.name}</p>
                <h2>Заработная плата</h2>
                {
                    <DetailPoint text={`${data.sallary}`} />
                }
                {data.conditions && <h2>условия</h2>}
                {
                    data.conditions.map(item => (
                        <DetailPoint text={item} />
                    ))
                }
                {data.requirments && <h2>Требования</h2>}
                {
                    data.requirments.map(item => (
                        <DetailPoint text={item} />
                    ))
                }
                {data.responsibilities &&
                    <h2>Должностные обязанности</h2>}
                {
                    data.responsibilities.map(item => (
                        <DetailPoint text={item} />
                    ))
                }
                <DetailRequest name={vacancie} />
            </div>

        </>
    )
}

export default VacanciePage;