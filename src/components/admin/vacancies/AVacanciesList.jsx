'use server'
import axios from 'axios';
import * as styles from './adminVacancies.module.css';
import '../../../../envConfig';
import { toast } from 'react-toastify';
import VacanciesListItem from './VacanciesListItem';

const AVacanciesList = async () => {
    let list = [];
    const {data} = await axios.get(`${process.env.BACKSEC}://${process.env.BACKHOST}:${process.env.BACKPORT}/user/vacancies`,{
        headers:{
            'Cache-Control':'no-cache, no-store, must-revalidate',
            'Pragma':'no-cache',
            'Expires':'0'
        }
    });
    list = data?data:list;
    return(
        <>
            <div className={styles.vacanciesListBlock}>
                <div className={styles.vacanciesHeading}>
                    Ниже представлены все активные вакансии
                </div>
                <div className={styles.vacanciesList}>
                    <VacanciesListItem style={{fontWeight: '700'}} />
                    <div className={styles.vacanciesUnderline}></div>
                {
                    list.reverse().map(item=>(
                        <VacanciesListItem key={item.name} {...item} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default AVacanciesList;